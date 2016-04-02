import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
var update = require('react-addons-update');

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
        console.log("Add 클릭", cardId, taskName);
        // Keep a reference to the original state prior to the mutations // in case you need to revert the optimistic changes in the UI
        let prevState = this.state;

        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

        // Create a new task with the given name and a temprory ID
        let newTask = {id: Date.now(), name:taskName, done:false}

        let nextState = update(this.state.cards, {
                      [cardIndex]: {
                        tasks: {$push: [newTask] }
        } });

        this.setState({cards:nextState});

         // Call the API to add the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
          method: 'post',
          headers: API_HEADERS,
          body: JSON.stringify(newTask)
        })
        .then((response) => {
            if(!response.ok){
            // Throw an error if server response wasn't 'ok'
            // so you can revert back the optimistic changes
            // made to the UI.
                throw new Error("Server response wasn't OK")
            } else {
                return response.json();
            }

        })
        .then((responseData) => {
        // When the server returns the definitive ID
        // used for the new Task on the server, update it on React newTask.id=responseData.id this.setState({cards:nextState});
        }).catch((error) => {
            console.error("Fetch error:",error)
            this.setState(prevState);
        });

    }

    deleteTask(cardId, taskId, taskIndex) {
        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);
        console.log("Delte 클릭", cardIndex);

        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });

        //
        this.setState({cards:nextState});

        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
          method: 'delete',
          headers: API_HEADERS
        });


    }

    toggleTask(cardId, taskId, taskIndex) {
            console.log("Toggle 클릭", cardId, taskId, taskIndex);
            // Find the index of the card
            let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

            // Save a reference to the task's 'done' value
            let newDoneValue;

            // Using the $apply command, you will change the done value
            let nextState = update(this.state.cards, {
                [cardIndex]: {
                    tasks: {
                        [taskIndex]: {
                            done: { $apply: (done) => {
                                newDoneValue = !done
                                return newDoneValue;
                            }}
                        }
                    }
                }
            });

            this.setState({cards:nextState});

            fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
                    method: 'put',
                    headers: API_HEADERS,
                    body: JSON.stringify({done:newDoneValue})
            });



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
                    toggle: this.toggleTask.bind(this),
                    delete: this.deleteTask.bind(this),
                    add: this.addTask.bind(this)
                }} />

    }
}

export default KanbanBoardContainer;
