import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Step1 from '../Wizard/Step1';
import Step2 from '../Wizard/Step2';
import Step3 from '../Wizard/Step3';
import {connect} from 'react-redux';
import {clearWizard} from '../../ducks/reducer';
import './Wizard.css';

class Wizard extends Component {


    handleCancel = () =>{
        this.props.clearWizard();
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="wizard-component">
                <div className="wizard-header">
                    <h2>Add New Listing</h2>
                    <button className="cancel-button" onClick={() => this.handleCancel()}>Cancel</button>
                </div>
                <Switch>
                    <Route path={`${this.props.match.url}/step2`} component={Step2} />
                    <Route path={`${this.props.match.url}/step3`} component={Step3} />
                    <Route  component={Step1} />
                </Switch>
            </div>
        )
    }
}

export default connect(null,{clearWizard})(Wizard);