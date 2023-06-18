import React, {useContext, useState, useEffect} from "react";
import {Context} from "../store/appContext.js"

export const CardVehicle = (props) => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({});

    function sendFavorite(e) {
        e.preventDefault()
        actions.addFavorite(props.nameVehicle)
    }

    return (
        <div className="">
            <div className="card" style ={ {width: 300}}>
            <img src="https://i.pinimg.com/originals/7d/36/70/7d3670dbfeb220f08e4980dbd25185c9.jpg" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.nameVehicle}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas.</p>
                    <div className="d-flex justify-content-between"><a href="#" className="btn btn-outline-primary">Learn more!</a><a onClick={sendFavorite} href="#" className="btn btn-outline-warning"> <i className="fa fa-heart" /> </a> </div>
            </div>
        </div>
    </div>
    );
};
export default CardVehicle