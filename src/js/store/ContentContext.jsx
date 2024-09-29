import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const AppContext = ({ children }) => {
    const [store, setStore] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [readLater, setReadLater] = useState([]);
    const [loading, setLoading] = useState(true);

    async function settingStore() {
        //get films
        try {
            const resp = await fetch('https://www.swapi.tech/api/films/');
            const jsonResp = await resp.json();
            const films = await jsonResp.result;
            setStore(prevStore => ({ ...prevStore, films }))
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
        //get characters
        try {
            const resp = await fetch('https://www.swapi.tech/api/people/');
            const jsonResp = await resp.json();
            const characters = await jsonResp.results;
            for (let i in characters) {
                characters[i].imgUrl = `https://starwars-visualguide.com/assets/img/characters/${characters[i].uid}.jpg`
            }
            setStore(prevStore => ({ ...prevStore, characters }))
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
        //get planets
        try {
            const resp = await fetch('https://www.swapi.tech/api/planets/');
            const jsonResp = await resp.json();
            const planets = await jsonResp.results
            for (let i in planets) {
                planets[i].imgUrl = `https://starwars-visualguide.com/assets/img/planets/${planets[i].uid}.jpg`
            }
            planets[0].imgUrl = 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
            setStore(prevStore => ({ ...prevStore, planets }))
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
        //get species
        try {
            const resp = await fetch('https://www.swapi.tech/api/species/');
            const jsonResp = await resp.json();
            const species = await jsonResp.results
            for (let i in species) {
                species[i].imgUrl = `https://starwars-visualguide.com/assets/img/species/${species[i].uid}.jpg`
            }
            setStore(prevStore => ({ ...prevStore, species }))
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
        //get starships
        try {
            const resp = await fetch('https://www.swapi.tech/api/starships/');
            const jsonResp = await resp.json();
            const starships = await jsonResp.results
            for (let i in starships) {
                starships[i].imgUrl = `https://starwars-visualguide.com/assets/img/starships/${starships[i].uid}.jpg`
            }
            //pendientes imgUrl 0,1,9
            setStore(prevStore => ({ ...prevStore, starships }))
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
        //get vehicles
        try {
            const resp = await fetch('https://www.swapi.tech/api/vehicles/');
            const jsonResp = await resp.json();
            const vehicles = await jsonResp.results
            for (let i in vehicles) {
                vehicles[i].imgUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicles[i].uid}.jpg`
            }
            setStore(prevStore => ({ ...prevStore, vehicles }))
            setLoading(false);
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
    };

    const [actions] = useState({
        addFavorite: (toAdd) => {
            setFavorites(prevList => ([...prevList, toAdd]));
        },
        removeFavorite: (toDelete) => {
            setFavorites(prevList => (
                prevList.filter(item => item !== toDelete)
            ));
        },
        addReadLater: (toAdd) => {
            setReadLater(prevList => ([...prevList, toAdd]));
        },
        removeReadLater: (toDelete) => {
            setReadLater(prevList => (
                prevList.filter(item => item !== toDelete)
            ));
        }
    });

    useEffect(() => {
        settingStore();
    }, []);

    return (
        <Context.Provider value={{ store, actions, favorites, readLater, loading }}>
            {children}
        </Context.Provider>
    );
};