import React, { Component } from 'react';

export class Identificazione extends Component {
    constructor(props){
        super(props);
        this.state = {value : ''}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
  render() {
    return <React.Fragment>
    <div>
        <h5>Identificazione</h5>
    <label>input :
                 <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
                 </label><br/>
        </div>

    </React.Fragment>;
  }
}

export default Identificazione;
