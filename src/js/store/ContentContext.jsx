import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const AppContext = ({ children }) => {
    const [store, setStore] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [readLater, setReadLater] = useState([]);

    //img
    //https://starwars-visualguide.com/assets/img/characters/10.jpg

    const getStore = () => {
        fetch('https://playground.4geeks.com/contact/agendas/fgamester/contacts')
            .then((resp) => {
                return resp.json();
            })
            .then((newResp) => {
                setStore(() => newResp.contacts)
            })
            .catch(error => {
                console.log(error);
            })
    };

    const [actions] = useState({
        addContact: item => {
            fetch('https://playground.4geeks.com/contact/agendas/fgamester/contacts', {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(() => {
                    getStore();
                })
                .catch(error => {
                    console.log(error)
                })
        },
    });

    useEffect(() => {
        getStore();
    }, []);

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};