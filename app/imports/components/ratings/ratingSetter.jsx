import React, { Component } from 'react';

import { saveRating } from '/imports/api/methods/ratingMethods.js';

import Alert from 'react-s-alert';

export class RatingSetter extends Component {
  setRating(rating) {
    if (rating === this.props.rating) {
      rating = 0;
    }

    saveRating.call({
      rating: rating,
      applicationId: this.props.applicationId,
    }, (err, res) => {
      if (err) {
        Alert.error(err.reason);
        console.log('Error:', err);
      } 
    });
  }

  render() {
    return (
      <div className={this.props.rating === 0 ? 'rating-buttons clean': 'rating-buttons'}>
        <h4>Rate this application</h4>
        {[1,2,3,4,5,6,7,8,9,10].map((val) => (<RatingButton rateVal={val} onClick={this.setRating.bind(this)} rating={this.props.rating} key={'rating-' + val}/>)) }
      </div>
    );
  }
}

export class RatingButton extends Component {
  render() {
    return <button className={this.props.rating == this.props.rateVal ? 'active' : ''} onClick={() => this.props.onClick(this.props.rateVal)}>{this.props.rateVal}</button>;
  }
}
