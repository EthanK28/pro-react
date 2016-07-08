import React, { Component } from 'react';
import {render} from 'react-dom';

class Greeter extends Component {
    constructor(){
        super();

    }
    

    render() {
        return (
            <h1>{this.props.saluation}</h1>
        )
    }
}

Greeter.defaultProps = {
    saluation: "Hello World"
}

    
// ProTypes => React.ProTypes

Greeter.propTypes = {
  saluation: React.PropTypes.string.isRequired
}



render(<Greeter />, document.getElementById('root'));
