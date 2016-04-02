import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    render() {
        var cards = this.props.cards.map((card) => {
            return <Card key={card.id}
                taskCallbacks={this.props.taskCallbacks} {...card} />
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}


List.propTypes = {
title: React.PropTypes.string.isRequired,
cards: React.PropTypes.arrayOf(React.PropTypes.object),
taskCallbacks: React.PropTypes.object,
}

export default List;
