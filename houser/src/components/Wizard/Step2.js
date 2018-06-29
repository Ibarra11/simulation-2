import React, { Component } from 'react';
import {connect} from 'react-redux';
import {wizardStepTwo} from '../../ducks/reducer';


class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }

    componentDidMount(){
        let {img} = this.props;
        this.setState({img});
    }

    handleInputChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleWizardStepTwo = navType =>{
        this.props.wizardStepTwo(this.state.img);
        (navType == 'previous' ? this.props.history.goBack() : this.props.history.push('/wizard/step3') )
        
    }

    render() {
        console.log(this.props)
        return (
            <div className="wizard-component">
                <div className="wizard-step-2">
                    <label>
                        <p>Image URL</p>
                        <input className="image-input" onChange={this.handleInputChange} name='img' value={this.state.img} type="text"/>
                    </label>
                </div>
                <div className="navigation">
                    <button className="step2-button"  onClick={() => this.handleWizardStepTwo('previous') }>Previous Step</button>  
                    <button className="step2-button"  onClick={(event) => this.handleWizardStepTwo('next') }>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        img: state.img
    }
}

export default connect(mapStateToProps, {wizardStepTwo})(Step2);