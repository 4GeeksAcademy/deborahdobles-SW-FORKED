const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [{}],
			planet: [{}],
			vehicle: [{}],

			favoritesList: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			obtainCharacter: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(err => console.log(err));
			},

			obtainPlanet: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planet: data.results }))
					.catch(err => console.log(err));	
			},

			obtainVehicle: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(data => setStore({ vehicle: data.results }))
					.catch(err => console.log(err));	
			},

			addFavorite: (favoriteName)=> {
				setStore({ favoriteList: getStore().favoritesList.concat(favoriteName) });	
			},

			deleteFavorite: (favoriteName)=> {
				const store = getStore();
				const newList = store.favoritesList.filter(item => item !== favoriteName);
				setStore({ favoritesList: newList });
			}
		}	
	};
};

export default getState;
