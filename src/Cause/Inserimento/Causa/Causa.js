import React, { Component } from 'react';
import Atto from './Atto';
import Identificazione from './Identificazione';
import OrganoGiudicante from '../../../OrganoGiudicante';

export class Causa extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        alert();
        
    }
  render() {
    return <React.Fragment>
        <div>
            <div>
                <h1>causa</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
            <div>
            <Identificazione />
            <Atto />
            <OrganoGiudicante />
            </div>
            <button type="submit">Invia</button>
            </form>
           
            
        </div>

    </React.Fragment>;
  }
}

export default Causa;
