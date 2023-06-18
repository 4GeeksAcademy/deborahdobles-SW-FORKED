import React, {useContext, useState, useEffect} from "react";
import {Context} from "../store/appContext.js"

export const Favorites = (props) => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({});

    function deleteFavorite(e) {
        actions.erraseFavorite(props.name)
    }
    return (
        <div className="div-flex justify-content-between">
            {props.name}<button onClick={deleteFavorite} className="btn-close"></button>
        </div>
    );
};
export default Favorites
