import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h4>Rating de la historia: {rating}</h4>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          size={200}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}