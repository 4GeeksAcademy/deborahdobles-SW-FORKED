import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { CardCharacter } from "../component/CardCharacter";
import { CardPlanet } from "../component/CardPlanet";
import { CardVehicle } from "../component/CardVehicle";
import { Favorites } from "../component/favorites";
import {Context} from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	useEffect(() => {
		actions.obtainCharacter();
		actions.obtainPlanet();
		actions.obtainVehicle();
	}, []);

return (
	<div className="">
	<div className="ms-3">
		<h1 className="text-danger m-3">Characters</h1>
		<div id="characterContainer" className="d-flex overflow-auto col-6 w-75">{store.character.map((item, index) => ( 
		<CardCharacter key={index} nameCharacter={item.name} uid={index+1}
			/>
		))}</div>
	</div>
	<div className="ms-3">
		<h1 className="text-danger m-3">Planets</h1>
		<div id="planetContainer" className="d-flex overflow-auto col-6 w-75">{store.planet.map((item, index) => ( 
		<CardPlanet key={index} namePlanet={item.name}
			/>
		))}</div>
	</div>
	<div className="ms-3">
		<h1 className="text-danger m-3">Vehicles</h1>
		<div id="vehicleContainer" className="d-flex overflow-auto col-6 w-75">{store.vehicle.map((item, index) => ( 
		<CardVehicle key={index} nameVehicle={item.name}
			/>
		))}</div>
	</div>

	</div>
);
}
