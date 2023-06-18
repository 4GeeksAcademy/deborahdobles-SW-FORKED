import React, {useContext, useState, useEffect} from "react";
import {Context} from "../store/appContext.js"

export const CardPlanet = (props) => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({});

    function sendFavorite(e) {
        e.preventDefault()
        actions.addFavorite(props.namePlanet)
    }

    return (
        <div className="">
            <div className="card" style ={ {width: 300}}>
            <img src="https://i.pinimg.com/originals/c7/e4/26/c7e42606cc03017466e6ae81a130e415.jpg" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.namePlanet}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas.</p>
                    <div className="d-flex justify-content-between"><a href="#" className="btn btn-outline-primary">Learn more!</a><a onClick={sendFavorite} href="#" className="btn btn-outline-warning"> <i className="fa fa-heart" /> </a> </div>
            </div>
        </div>
    </div>
    );
};
export default CardPlanet