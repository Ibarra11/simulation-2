import React, { Component } from 'react';

import {connect} from 'react-redux';

import {wizardStepOne} from '../../ducks/reducer';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    componentDidMount(){
        let {name, address, city, state, zip} = this.props;
        this.setState({name, address, city, state, zip })
    }

    handleInputChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateStepOne = () =>{
        let {name, address, city, state, zip} = this.state;
        this.props.wizardStepOne(name, address, city, state, zip);
        this.props.history.push('/wizard/step2')
    }

    render() {
        return (
            <div className="wizard-component">
                <div className="wizard-input-container">
                    <label>
                        <p>Property Name</p>
                        <input onChange={this.handleInputChange} name='name' value={this.state.name} type="text"/>
                    </label>
                    <br/>
                    <label >
                        <p>Address</p>
                        <input onChange={this.handleInputChange} name='address' value={this.state.address} type="text"/>
                    </label>
                    <br/>
                    <label >
                         <p>City</p>
                        <input onChange={this.handleInputChange} name='city' value={this.state.city} type="text"/>
                    </label>
                    <label >
                        <p>State</p>
                        <input onChange={this.handleInputChange} name='state' value={this.state.state} type="text"/>
                    </label>
                    <label htmlFor="Zipcode">
                        <p>Zipcode</p>
                        <input onChange={this.handleInputChange} name='zip' value={this.state.zip} type="text"/>
                    </label>
                </div>
                <div className="navigation">
                    <button className="step1-button" onClick={() => this.updateStepOne() }>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {wizardStepOne})(Step1);