import React, { Component } from 'react';

class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name} 나는 체크 리스트
                <a href="#" className="checklist__task--remove" />
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                        className="checklist--add-task"
                        placeholder="Type then hit Enter to add a task"/>
            </div>
        );
    }
}

export default CheckList
