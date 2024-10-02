import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/ContentContext";

const ContentView = () => {
    const context = useContext(Context);
    const params = useParams();
    const [displayedItem, setDisplayedItem] = useState({})

    async function getInfo() {
        const fetchUrl = context.store[params.content_cat][params.id - 1].url;
        let newItem = {};
        try {
            const resp = await fetch(fetchUrl);
            const jsonResp = await resp.json();
            const result = await jsonResp.result;
            switch (params.content_cat) {
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
                        'img': context.store.characters[params.id - 1].imgUrl
                    }
                    setDisplayedItem(newItem);
                    break;
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
                        'img': context.store.species[params.id - 1].imgUrl
                    }
                    setDisplayedItem(newItem);
                    break;
            }
            console.log(result)
            console.log(newItem)
        } catch (error) {
            console.error("The requested URL didn't provide us with the expected information", error);
        }
    }

    const CharacterCard = () => (
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8">
            <div className="card mb-3" >
                <div className="row d-flex flex-column flex-md-row align-items-md-start g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={displayedItem.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{displayedItem.name}</h5>
                            <p className="card-text my-0"><span className="fw-bold">Gender: </span>{displayedItem.gender}</p>
                            <p className="card-text my-0"><span className="fw-bold">Birth Year: </span>{displayedItem.birth_year}</p>
                            <p className="card-text my-0"><span className="fw-bold">Skin Color: </span>{displayedItem.skin_color}</p>
                            <p className="card-text my-0"><span className="fw-bold">Height: </span>{displayedItem.height}</p>
                            <p className="card-text my-0"><span className="fw-bold">Eye Color: </span>{displayedItem.eye_color}</p>
                            <p className="card-text my-0"><span className="fw-bold">Hair Color: </span>{displayedItem.hair_color}</p>
                            <p className="card-text my-0"><span className="fw-bold">Mass: </span>{displayedItem.mass}</p>
                            <p className="card-text my-0"><small className="text-body-secondary">{displayedItem.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const SpecieCard = () => (
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8">
            <div className="card mb-3" >
                <div className="row d-flex flex-column flex-md-row align-items-md-start g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={displayedItem.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{displayedItem.name}</h5>
                            <p className="card-text my-0"><span className="fw-bold">Average Height: </span>{displayedItem.average_height}</p>
                            <p className="card-text my-0"><span className="fw-bold">Average Lifespan: </span>{displayedItem.average_lifespan}</p>
                            <p className="card-text my-0"><span className="fw-bold">Classification: </span>{displayedItem.classification}</p>
                            <p className="card-text my-0"><span className="fw-bold">Designation: </span>{displayedItem.designation}</p>
                            <p className="card-text my-0"><span className="fw-bold">Eye Colors: </span>{displayedItem.eye_colors}</p>
                            <p className="card-text my-0"><span className="fw-bold">Hair Colors: </span>{displayedItem.hair_colors}</p>
                            <p className="card-text my-0"><span className="fw-bold">Language: </span>{displayedItem.language}</p>
                            <p className="card-text my-0"><small className="text-body-secondary">{displayedItem.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const setCard = () => {
        switch (params.content_cat) {
            case ('characters'):
                return <CharacterCard />;
            case ('species'):
                return <SpecieCard />;
            default:
                return <h1 className="text-center">The content you're trying to display isn't available. Are you sure the path is the correct?</h1>
        }
    }

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <div className="container-fluid pt-4 d-flex justify-content-center">
            {setCard()}
        </div>
    );
}

export default ContentView;