import React, { Component } from 'react';

export class OrganoGiudicante extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return <React.Fragment>
        <div>
            <h5>Organo giudicante</h5>
        <label>input :
                 <input type="text" className="input" />
                 </label><br/>
        </div>

    </React.Fragment>;
  }
}

export default OrganoGiudicante;
