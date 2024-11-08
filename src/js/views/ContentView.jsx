import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/ContentContext";
import CharacterCard from "../components/content-cards/CharacterCard";
import SpecieCard from "../components/content-cards/SpecieCard";
import FilmCard from "../components/content-cards/FilmCard";

const ContentView = () => {
    const { actions, loading } = useContext(Context);
    const params = useParams();
    const [displayedItem, setDisplayedItem] = useState({})

    const getInfo = async () => {
        const response = await actions.getItem(params.content_cat, params.id)
        setDisplayedItem(response);
    }

    const setCard = () => {
        switch (params.content_cat) {
            case ('characters'):
                return <CharacterCard data={displayedItem} />;
            case ('species'):
                return <SpecieCard data={displayedItem} />;
            case ('films'):
                return <FilmCard data={displayedItem} />;
            default:
                return <h1 className="text-center">The content you're trying to display isn't available. Are you sure This Is The Way?</h1>
        }
    }

    useEffect(() => {
        !loading && getInfo(params.content_cat, params.id);
    }, [params.id, loading])

    return (
        <div className="container-fluid pt-4 d-flex justify-content-center">
            {setCard()}
        </div>
    );
}

export default ContentView;