import React, { Component } from 'react';

export class Atto extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return <React.Fragment>
         <div>
             <h5>Atto</h5>
         <label>input :
                 <input type="text" className="input" />
                 </label><br/>
        </div>

    </React.Fragment>;
  }
}

export default Atto;
