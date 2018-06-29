import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {wizardStepThree} from '../../ducks/reducer';
import {clearWizard} from '../../ducks/reducer';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            rent: 0
        }
        this.addProperty = this.addProperty.bind(this);
    }

    componentDidMount(){
        let {mortgage, rent} = this.props;
        this.setState({mortgage, rent});
    }

    addProperty() {
        let {name, address, city, state,zip, img} = this.props;
        let {mortgage, rent} = this.state;
        axios.post('/api/houses/', {
            name, address, city, state, zip, img, mortgage, rent
        })
        .then(() =>{
            this.props.clearWizard();
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleWizardStepThree = () =>{
        this.props.wizardStepThree(this.state.mortgage, this.state.rent);
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="wizard-component">
                <div className="wizard-input-container">
                    <label>
                        <p>Monthly Mortgage Amount</p>
                        <input onChange={this.handleInputChange} name='mortgage' value={this.state.mortgage} type="text" />
                    </label>
                    <label>
                        <p>Desired Monthly Amount</p>
                        <input onChange={this.handleInputChange} name='rent' value={this.state.rent} type="text" />
                    </label>
                </div>
                <div className="navigation">
                    <button className="step3-button" onClick={() => this.handleWizardStepThree() }>Previous Step</button>  
                    <button className="step3-button" onClick={() => this.addProperty()}>Complete</button>
                </div>
            </div>


        )
    }
}

function mapStateToProps(state){
    return{
        ...state
    }
}

export default connect(mapStateToProps, {wizardStepThree, clearWizard})(Step3);