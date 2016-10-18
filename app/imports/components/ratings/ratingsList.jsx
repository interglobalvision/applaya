import React, { Component } from 'react';

export class RatingsList extends Component {
  render() {
    if (this.props.ratings) {
      return (
        <section>
          <h4>Ratings List</h4>
          <table>
            <thead>
              <tr>
                <td className='s-6'>Member</td>
                <td className='s-6'>Rating</td>
              </tr>
            </thead>
            <tbody>
              {this.props.ratings.map((rating, key) => (
                <tr key={key}>
                  <td>
                    { rating.user.profile && rating.user.profile.name ? rating.user.profile.name : rating.user.emails[0].address }
                  </td>
                  <td>
                    {rating.value}
                  </td>
                </tr>
              ))}
              <tr>
                <td>Average rating</td>
                <td>{this.props.averageRating}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className='s-6'>Average rating</td>
                <td className='s-6'>{this.props.averageRating}</td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    } 

    return '<h4>Not rated yet</h4>';
  }
};
