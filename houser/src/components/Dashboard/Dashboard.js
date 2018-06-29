import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getAllHouses()
    }

    getAllHouses = () =>{
        axios.get('/api/houses')
        .then(res => this.setState({houses: res.data}))
        .catch(err => console.log(err))
    }

    deleteHouse = (id) =>{
        axios.delete(`/api/houses/${id}`)
        .then(() =>{
            this.getAllHouses();
        })
    }

    render() {
        return (
            <div className="dashboard-component">
                <div className="dashboard-header">
                     <h1 className="dash-main">Dashboard</h1>
                    <Link className="dash-link" to='/wizard'>Add New Property</Link>
                </div>
                <div className="dashboard-houses-container">
                <h3>Home Listings</h3>
                    {this.state.houses.map((house,index) =>{
                        return <House deleteHouse={this.deleteHouse} house={house} key={index} />
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard;