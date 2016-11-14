import React, { Component } from 'react';

export class AdminIndexAnalytics extends Component {
  constructor() {
    super();

    this.state = {
      extended: false
    };
  }

  toggleExtended() {
    this.setState({
      extended: this.refs.extended.checked
    });
  }

  allFalse(stats) {
    for (let key in stats) {
      if (stats[key])
        return false;
    }
    return true;
  }

  roundStats(stats, total, min) {

    if (this.allFalse(stats)) {
      return stats;
    }

    let minVal = total * min;

    // Get 0 values
    let zeroValues = {};
    _.each(stats, (val,key) => {
      if (val === 0) {
        zeroValues[key] = 0;
      }
    });

    // Remove 0s from stats
    let cleanStats = _.omit(stats, _.keys(zeroValues));

    // Get values that are < min and round em up to min, values == 0 are ignored
    let roundedSmallValues = {};
    _.each(cleanStats, (val,key, object) => {
      if (val/total <= min && val !== 0) {
        roundedSmallValues[key] = minVal;
      }
    });

    // If no values where rounded return
    if (_.keys(roundedSmallValues).length === 0) {
      return stats;
    }

    // Get total of values that are > min
    let bigValues = _.omit(cleanStats, _.keys(roundedSmallValues).concat(_.keys(zeroValues)));

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
    return Object.assign(roundedBigValues, roundedSmallValues, zeroValues);
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
          return !val.status['complete'] && !val.status['submitted'] && !val.status['paid'] && val.status['extended'] === extended;
          break;
        case 'complete':
          return val.status['complete'] && !val.status['submitted'] && !val.status['paid'] && val.status['extended'] === extended;
          break;
        case 'submitted':
          return val.status['complete'] && val.status['submitted'] && !val.status['paid'] && val.status['extended'] === extended;
          break;
        case 'paid':
          return val.status['complete'] && val.status['submitted'] && val.status['paid'] && val.status['extended'] === extended;
          break;
        case 'approved':
          return val.status['approved'];
      }
      return val.status[status];
    }).length;
  }

  countByExtended(applications, extended) {
    return _.filter(applications, val => {
      return val.status['extended'] === extended;
    }).length;
  }

  getPercentages(stats, total) {
    let percentages = {};
    _.each(stats, (val,key) => {
        if(val === 0) {
          percentages[key] = '0%';
        } else {
          percentages[key] = (val * 100 / total) + '%';
        }
    });

    return percentages;
  }

  render() {

    let total = this.countByExtended(this.props.applications, this.state.extended);
    let stats = this.getStats(this.props.applications, this.state.extended);
    let roundedStats = this.roundStats(stats, total, 0.12);
    let percentages = this.getPercentages(roundedStats, total);

    return (
      <section className='margin-bottom-mid'>
        <div className='grid-row'>
          <div className='grid-item item-s-12 margin-bottom-small'>
            <h2 className='font-serif font-size-mid'>Admin Analytics Dashboard</h2>
          </div>
          <div className='grid-item item-s-12 item-m-2 text-align-center'>
            <div className='stat-bar stats-total padding-top-small padding-bottom-small'>
              <h3 className='font-size-tiny'>Total{this.state.extended ? ' extended' : ''}</h3>
              <span className='font-size-mid'>{total}</span>
            </div>
          </div>
          <div className='grid-item item-s-12 item-m-1 text-align-center grid-column justify-center'>
            <div className='padding-top-small padding-bottom-small font-size-large'>=</div>
          </div>
          <div className='grid-item item-s-12 item-m-9 grid-row'>
            <div className='grid-item no-gutter stat-bar stats-in-progress text-align-center padding-top-small padding-bottom-small' style={{flexBasis: percentages.inProgress, display: percentages.inProgress === '0%' ? 'none' : 'initial'}}>
              <h3 className='font-size-tiny'>In progress</h3>
              <span className='font-size-mid'>{stats.inProgress}</span>
            </div>
            <div className='grid-item no-gutter stat-bar stats-complete text-align-center padding-top-small padding-bottom-small' style={{flexBasis: percentages.complete, display: percentages.complete === '0%' ? 'none' : 'initial'}}>
              <h3 className='font-size-tiny'>Filled</h3>
              <span className='font-size-mid'>{stats.complete}</span>
            </div>
            <div className='grid-item no-gutter stat-bar stats-submitted text-align-center padding-top-small padding-bottom-small' style={{flexBasis: percentages.submitted, display: percentages.submitted === '0%' ? 'none' : 'initial'}}>
              <h3 className='font-size-tiny'>Submitted</h3>
              <span className='font-size-mid'>{stats.submitted}</span>
            </div>
            <div className='grid-item no-gutter stat-bar stats-paid text-align-center padding-top-small padding-bottom-small' style={{flexBasis: percentages.paid, display: percentages.paid === '0%' ? 'none' : 'initial'}}>
              <h3 className='font-size-tiny'>Paid</h3>
              <span className='font-size-mid'>{stats.paid}</span>
            </div>
          </div>
        </div>
        <div className='grid-row'>
          <div className='grid-item item-s-12'>
            <input name='extended' type='checkbox' checked={this.state.checked} onChange={ () => this.toggleExtended()} ref='extended'/>
            <label htmlFor='extended'>Extended</label>
          </div>
        </div>
      </section>
    );
  }
}
