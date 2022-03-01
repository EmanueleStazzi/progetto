import React, { Component } from 'react';

export class Inpunts extends Component {
    constructor(props){
        super(props);
        this.state = {value : '',value2 : '',value3 : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
   
    handleSubmit(){
        alert(this.state.value,
            this.state.value2,
            this.state.value3);
    }
  render() {
    return <React.Fragment>
        <form onSubmit={this.handleSubmit}>
            <label>input :
                 <input type="text" class="input" value={this.state.value} onChange={this.handleChange}/>
                 </label><br/>
          <button type="submit" value="invia">Invia</button>
         
        </form>
    </React.Fragment>;
  }
}

export default Inpunts;
