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

  render() {

    let total = this.props.total;
    let stats = this.props.stats;
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
