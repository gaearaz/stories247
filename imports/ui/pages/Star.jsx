import React from 'react';
import Ratings from 'react-ratings-declarative';

export default class Star extends React.Component {
    changeRating(newRating, name) {
        this.setState({
            rating: newRating   
        });
    }

    render() {
        // rating = 2;
        return (
            <Ratings
                rating={this.state.rating}
                widgetRatedColors="blue"
                changeRating={this.changeRating}
            />
        );
    }
}