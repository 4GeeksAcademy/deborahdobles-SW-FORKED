import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.obtainPlanet(params.theid);
		
	},[])
	
	console.log(store.obtainPlanet)
	return (
		<div className="jumbotron text-center">
			 <img src={`https://starwars-visualguide.com/assets/img/planet/${params.theid}.jpg`} class="card-img-left" alt="..."></img>
			<h1 className="display-4">{store.obtainPlanet?.properties?.name}</h1>
			<h2></h2>
			<hr className="my-4" />
			<div className="container">
				<table className="table">
					<thead>
						<tr>
						<th scope="col">Diameter</th>
						<th scope="col">Climate</th>
						<th scope="col">Terrain</th>
						<th scope="col">Population</th>
						</tr>
					</thead>
					
						<tr>
						<td>{store.obtainPlanet?.properties?.diameter}</td>
						<td>{store.obtainPlanet?.properties?.climate}</td>
						<td>{store.obtainPlanet?.properties?.terrain}</td>
						<td>{store.obtainPlanet?.properties?.population}</td>
						</tr>
						
				</table>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};