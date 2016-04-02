import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
    render() {
        return (
            <div className="app">
                <List title="To do" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "todo")
                    }/>
                <List title="In Progress" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                    }/>
                <List title="Done" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "done")
                    }/>
                
            </div>
        );
    }
}

KanbanBoard.propTypes = {
    cards: React.PropTypes.arrayOf(React.PropTypes.object),
    taskCallbacks: React.PropTypes.object
};


export default KanbanBoard;
