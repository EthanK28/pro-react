import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

class App extends React.Component {
  render(){
      var place ="!World"
    return (
      <h1>Hello {place}</h1>
    );
  }
}

class Hello extends Component {
    render() {
        let divStyle = {
            width: 100,
            height: 50,
            padding: 5,
            backgroundColor: '#ee9900'
        };
        return <div style={divStyle}>Hello World</div>
    }
}

let cardsList = [
    {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
    },
    {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    color: '#3A7E28',
    status: "todo",
    tasks: [
        {
        id: 1,
        name: "ContactList Example",
        done: true
        },
        {
            id: 2,
            name: "Kanban Example",
            done: false
          },
          {
            id: 3,
            name: "My own experiments",
            done: false }
        ]
    },
];

class Search extends Component {

    constructor() {
        super();
        this.state = {
            searchTerm: "Reacts"
        }
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }
    render() {
        return (
            <form>
                    <div className="formGroup">
      Name: <input name="name" type="text" />
    </div>
    <div className="form-group sexy">
      E-mail: <input name="email" type="mail" />
    </div>
    <button type="submit">Submit</button>
            </form>
            // <div>
            //     Search Term:
            //     <input type="search" value={this.state.searchTerm}
            //             onChange={this.handleChange.bind(this)}/>
            // </div>
        )
    }
}

// render(<Search />, document.getElementById('root'));


render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
// render(<Hello />, document.getElementById('root'));


// class GroceryList extends Component {
//     render() {
//         return (
//             <ul>
//                 <ListItem quantity="1" name="bread" />
//                 <ListItem quantity="2" name="Eggs" />
//                 <ListItem quantity="3" name="bread" />
//                 <ListItemChild quantity="1">Bread</ListItemChild>
//                 <ListItemChild quantity="2">Eggs</ListItemChild>
//                 <ListItemChild quantity="3">Milk</ListItemChild>
//             </ul>
//         );
//     }
// }
//
// class ListItem extends Component {
//     render() {
//         return (
//             <li>
//                 {this.props.quantity} x {this.props.name}
//             </li>
//
//         )
//     }
// }
//
// class ListItemChild extends Component {
//     render() {
//         return (
//             <li>
//                 {this.props.quantity} x {this.props.children}
//             </li>
//         )
//     }
// }
