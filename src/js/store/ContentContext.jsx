import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const AppContext = ({ children }) => {
    const [store, setStore] = useState({});
    const [people, setPeople] = useState({}); //fetch completado
    const [planetList, setPlanetList] = useState({}); //fetch completado
    const [favorites, setFavorites] = useState([]);
    const [readLater, setReadLater] = useState([]);

    //img
    //https://starwars-visualguide.com/assets/img/characters/10.jpg

    async function getPlanets() {
        try {
            const resp = await fetch('https://www.swapi.tech/api/planets');
            const jsonResp = await resp.json();
            const planetList = await jsonResp.results
            for (let i in planetList) {
                planetList[i].imgUrl = `https://starwars-visualguide.com/assets/img/planets/${planetList[i].uid}.jpg`
            }
            planetList[0].imgUrl = 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
            setPlanetList(planetList)
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
    };

    async function getPeople() {
        try {
            const resp = await fetch('https://www.swapi.tech/api/people');
            const jsonResp = await resp.json();
            const peopleList = await jsonResp.results;
            for (let i in peopleList) {
                peopleList[i].imgUrl = `https://starwars-visualguide.com/assets/img/characters/${peopleList[i].uid}.jpg`
            }
            setPeople(peopleList)
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
    };

    const [actions] = useState({
        addFavorite: item => {
            const newList = [...favorites, item];
            setFavorites(newList);
        },
    });

    useEffect(() => {
        getPlanets();
        getPeople();
    }, []);

    return (
        <Context.Provider value={{ store, actions, planetList }}>
            {children}
        </Context.Provider>
    );
};