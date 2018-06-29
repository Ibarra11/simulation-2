import React from 'react';
import './House.css';
function House(props) {
    console.log(props);
    let { id, name, address, city, state, zip, img, mortgage, rent } = props.house;
    return (
        <div className="house-card">
            <div className="house-img-container">
                <img className="house-img" src={img} />
            </div>
            <div className="house-details">
                <div className="house-details-1">
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Zipcode: {zip}</p>
                </div>
                <div className="house-details-2">
                    <p>Monthly Mortgage: {mortgage}</p>
                    <p>Desired Rent: {rent}</p>
                    <button className="delete-house" onClick={() => props.deleteHouse(id)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default House;