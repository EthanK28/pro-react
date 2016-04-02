class Greeter extends Component {
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



//render(<Greeter />, document.getElementById('root'));
