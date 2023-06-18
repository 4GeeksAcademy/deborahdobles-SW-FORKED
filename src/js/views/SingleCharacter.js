import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.obtainCharacter(params.theid)
		
	},[])

	console.log(store.obtainCharacter)

	return (
		<div className="jumbotron text-center">
			 <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="card-img-left" alt="..."></img>
			<h1 className="display-4">{store.obtainCharacter?.properties?.name}</h1>
			<h2> </h2>
			<hr className="my-4" />
			<div className="container">
				<table className="table">
					<thead>
						<tr>
						<th scope="col">Eye color</th>
						<th scope="col">Height</th>
						<th scope="col">Mass</th>
						<th scope="col">Birth year</th>
						</tr>
					</thead>
						<tr>
						<td>{store.obtainCharacter?.properties?.eye_color}</td>
						<td>{store.obtainCharacter?.properties?.height}</td>
						<td>{store.obtainCharacter?.properties?.mass}</td>
						<td>{store.obtainCharacter?.properties?.birth_year}</td>
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

SingleCharacter.propTypes = {
	match: PropTypes.object
};