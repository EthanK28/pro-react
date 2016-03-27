import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'heysdafhoiqekrkdmsmhrjyy'// The Authorization is not needed for local server
};


class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards:[],
        };
    }

    addTask(cardId, taskName) {

    }

    deleteTask(cardId, taskId, taskIndex) {

    }

    toggleTask(cardId, taskId, taskIndex) {

    }

    componentDidMount() {
        fetch(API_URL+'/cards', {headers: API_HEADERS})
            .then((response) => response.json())
            .then((responseData) => {
              this.setState({cards: responseData});
            })
            .catch((error) => {
              console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return <KanbanBoard cards={this.state.cards}
                taskCallbacks={{
                    
                }}/>
    }
}

export default KanbanBoardContainer;
