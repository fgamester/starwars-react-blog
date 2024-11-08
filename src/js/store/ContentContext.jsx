import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const AppContext = ({ children }) => {
    const [store, setStore] = useState(JSON.parse(localStorage.getItem('store')) || {});
    const [favorites, setFavorites] = useState([]);
    const [readLater, setReadLater] = useState([]);
    const [loading, setLoading] = useState(true);
    // Agregar favCount y lateCount para agregar ids a las listas, actualizar en componentes que utilicen la función
    const [favCount, setFavCount] = useState(0);
    const [lateCount, setLateCount] = useState(0);

    const getUrl = (category, id) => {
        let newUrl = '';
        switch (category) {
            case 'films':
                console.log(store[category][id - 1].properties.url || 'error')
                newUrl = store[category][id - 1].properties.url;
                console.log(newUrl)
                return newUrl
            default:
                newUrl = store[category][id - 1].url;
                console.log(newUrl)
                return newUrl;
        }
    }

    const settingStore = async () => {
        let newStore = {};
        //get films
        try {
            const resp = await fetch('https://www.swapi.tech/api/films/');
            const jsonResp = await resp.json();
            const films = await jsonResp.result;
            //https://starwars-visualguide.com/assets/img/films/4.jpg
            for (let i in films) {
                films[i].imgUrl = `https://starwars-visualguide.com/assets/img/films/${films[i].uid}.jpg`
            }
            // setStore(prevStore => ({ ...prevStore, films }))
            newStore = { ...newStore, films }
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
            // setStore(prevStore => ({ ...prevStore, characters }))
            newStore = { ...newStore, characters }
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
            planets[0].imgUrl = 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg'
            // setStore(prevStore => ({ ...prevStore, planets }))
            newStore = { ...newStore, planets }
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
            // setStore(prevStore => ({ ...prevStore, species }))
            newStore = { ...newStore, species }
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
            // setStore(prevStore => ({ ...prevStore, starships }))
            newStore = { ...newStore, starships }
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
            // setStore(prevStore => ({ ...prevStore, vehicles }))
            newStore = { ...newStore, vehicles }
            setStore(newStore);
            localStorage.setItem('store', JSON.stringify(newStore));
            setLoading(false);
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
    };

    const [actions] = useState({
        addFavorite: (toAdd) => {
            setFavCount(prev => {
                const newItem = { ...toAdd, 'id': prev }
                setFavorites(prevList => ([...prevList, newItem]));
                return prev + 1;
            });
        },
        removeFavorite: (toDelete) => {
            setFavorites(prevList => (
                prevList.filter(item => item['item'] !== toDelete)
            ));
        },
        addReadLater: (toAdd) => {
            setLateCount(prev => {
                const newItem = { ...toAdd, 'id': prev }
                setReadLater(prevList => ([...prevList, newItem]));
                return prev + 1;
            });
        },
        removeReadLater: (toDelete) => {
            setReadLater(prevList => (
                prevList.filter(item => item['item'] !== toDelete)
            ));
        },
        getItem: async (category, id) => {
            let newItem = {};
            try {
                //arreglar esto
                const resp = await fetch(getUrl(category, id));
                console.log(resp)
                const jsonResp = await resp.json();
                console.log(jsonResp)
                const result = await jsonResp.result;
                switch (category) {
                    case ('characters'):
                        newItem = {
                            'name': result.properties.name,
                            'gender': result.properties.gender,
                            'birth_year': result.properties.birth_year,
                            'skin_color': result.properties.skin_color,
                            'height': result.properties.height,
                            'eye_color': result.properties.eye_color,
                            'hair_color': result.properties.hair_color,
                            'mass': result.properties.mass,
                            'description': result.description,
                            'img': store?.characters[id - 1].imgUrl
                        };
                        return newItem;
                    case ('species'):
                        newItem = {
                            'name': result.properties.name,
                            'average_height': result.properties.average_height,
                            'average_lifespan': result.properties.average_lifespan,
                            'classification': result.properties.classification,
                            'designation': result.properties.designation,
                            'eye_colors': result.properties.eye_colors,
                            'hair_colors': result.properties.hair_colors,
                            'language': result.properties.language,
                            'description': result.description,
                            'img': store?.species[id - 1].imgUrl
                        };
                        return newItem;
                    case ('films'):
                        newItem = {
                            'title': result.properties.title,
                            'episode': result.properties.episode_id,
                            'release_date': result.properties.release_date,
                            'director': result.properties.director,
                            'producer': result.properties.producer,
                            'opening_crawl': result.properties.opening_crawl,
                            'img': store?.films[id - 1].imgUrl
                        };
                        return newItem;
                }
            } catch (error) {
                console.error("The requested URL didn't provide us with the expected information", error);
            }
        }
    });

    useEffect(() => {
        const localStore = JSON.parse(localStorage.getItem('store'));
        if (localStore) {
            setStore(localStore);
            setLoading(false);
        } else {
            settingStore();
        }
    }, []);

    return (
        <Context.Provider value={{ store, actions, favorites, readLater, loading }}>
            {children}
        </Context.Provider>
    );
};