import React, { Component } from 'react';
import CheckList from './CheckList';

// HTML 생성할때 쓰는 모듈
// import marked from 'marked';


class Card extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) { cardDetails = (
            <div className="card__details">
            {this.props.description}
            <CheckList cardId={this.props.id} tasks={this.props.tasks} />
            </div> );
        };


    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };
        return (
            <div className="card">
                <div style={sideColor} />
                <div className="card__title" onClick={this.toggleDetails.bind(this)}> {this.props.title}
                </div>
            {cardDetails} </div>
        );
    }
}


export default Card;
