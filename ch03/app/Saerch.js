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
