import React, { Component } from 'react';

export class AdminIndexAnalytics extends Component {
  getPercentage(part, total) {
    return (part * 100 / total) + '%';
  }

  roundStats(stats, total, min) {

    let minVal = total * min;

    // Get values that are < min and round em up to min, values == 0 are ignored
    let roundedSmallValues = {};
    _.each(stats, (val,key, object) => {
      if (val/total <= min && val !== 0) {
        roundedSmallValues[key] = minVal;
      }
    });

    // Get total of values that are > min
    let bigValues = _.omit(stats, _.keys(roundedSmallValues));

    let sumBigValues = _.reduce(_.values(bigValues), (memo, num) => memo + num);
    
    // Get total of rounded values
    let sumSmallRoundValues = _.reduce(_.values(roundedSmallValues), (memo, num) => memo + num);

    // Get available space
    let availableSpace = total - sumSmallRoundValues;

    // Round values that are > min to fit in available space
    let reducerRatio = availableSpace/sumBigValues;

    let roundedBigValues = {};

    _.each(bigValues, (val,key) => roundedBigValues[key] = val * reducerRatio);
    
    // Merge all rounded values
    return Object.assign(roundedBigValues, roundedSmallValues);
  }

  applicationsTotal() {
    return this.props.applications.length;
  }

  getStats(applications, extended = false) {

    let inProgress = this.countByStatus(applications, 'inProgress', extended);
    let complete = this.countByStatus(applications, 'complete', extended);
    let submitted = this.countByStatus(applications, 'submitted', extended);
    let paid = this.countByStatus(applications, 'paid', extended);

    return {
      inProgress,
      complete,
      submitted,
      paid,
    };
  }

  /** 
   * Return the count of application with specified status.
   *
   * @param applications[array] the applications to check
   * @param status[string] the status to check
   * @param extended[boolean] if extended
   *
   **/
  countByStatus(applications, status, extended) {
    return _.filter(applications, val => {
      switch(status) {
        case 'inProgress':
          return !val.status['complete'] && !val.status['submitted'] && !val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'complete':
          return val.status['complete'] && !val.status['submitted'] && !val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'submitted':
          return val.status['complete'] && val.status['submitted'] && !val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'paid':
          return val.status['complete'] && val.status['submitted'] && val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'approved':
          return val.status['approved'];
      }
      return val.status[status];
    }).length;
  }

  render() {

    let total = this.props.applications.length;
    let stats = this.getStats(this.props.applications);
    let roundedStats = this.roundStats(stats, total, 0.12);

    return (
      <section className='row margin-bottom-mid'>
        <div className='fluid-col s-12 m-12'>
          <h2>Admin Analytics Dashboard</h2>
        </div>
        <div className='fluid-col s-12 m-2 text-align-center'>
          <span className='stat-bar stats-total'>
            <h3>Total</h3>
            <p>{total}</p>
          </span>
        </div>
        <div className='fluid-col s-12 m-1 text-align-center'>
          <h3>&emsp;</h3>
          <p>=</p>
        </div>
        <div className='fluid-col s-12 m-9'>
          <span className='stat-bar stats-in-progress text-align-center' style={{width: this.getPercentage(roundedStats.inProgress, total)}}>
            <h3>In progress</h3>
            <p>{stats.inProgress}</p>
          </span>
          <span className='stat-bar stats-complete text-align-center' style={{width: this.getPercentage(roundedStats.complete, total)}}>
            <h3>Filled</h3>
            <p>{stats.complete}</p>
          </span>
          <span className='stat-bar stats-submitted text-align-center' style={{width: this.getPercentage(roundedStats.submitted, total)}}>
            <h3>Submitted</h3>
            <p>{stats.submitted}</p>
          </span>
          <span className='stat-bar stats-paid text-align-center' style={{width: this.getPercentage(roundedStats.paid, total)}}>
            <h3>Paid</h3>
            <p>{stats.paid}</p>
          </span>
        </div>
      </section>
    );
  }
}
