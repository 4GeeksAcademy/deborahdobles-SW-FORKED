import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const CardCharacter = (props) => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({});

    function sendFavorite(e) {
        e.preventDefault()
        actions.addFavorite(props.nameCharacter)
    }

    return (
        <div className="">
            <div className="card" style ={ {width: 300}}>
            <img src="https://media.timeout.com/images/105863223/image.jpg" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.nameCharacter}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas.</p>
                    <div className="d-flex justify-content-between"><Link href={"/character/"+props.uid} className="btn btn-outline-primary">Learn more!</Link><a onClick={sendFavorite} href="#" className="btn btn-outline-warning"> <i className="fa fa-heart" /> </a> </div>
            </div>
        </div>
    </div>
    );
};
export default CardCharacter