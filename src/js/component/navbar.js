import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { Favorites } from "../component/favorites.js"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
    const [state, setState] = useState({});

function empty() {
	store.favoritesList.length 
	if (store.favoritesList.length >= 1) return (store.favoritesList.length) 
	else return ("0");
}
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 LogoStarWars"><img style={{maxHeight:100, maxWidth:100}} className="Logo" src="https://w7.pngwing.com/pngs/4/136/png-transparent-star-wars-anakin-skywalker-logo-star-wars-text-number-desktop-wallpaper.png"></img></span>
			</Link>
			<div className="ml-auto">
				<div className="dropDownMenu">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites {empty()}</button>
				<ul className="dropdown-menu">
    <li><span className="dropdown-item">{store.favoritesList.map((item, index)=> (<Favorites key={index} nombre={item} />))}</span></li>
				</ul>
				</div>
			</div>
		</nav>
	);
};
