import React from "react";
import CategoriesCard from "../components/CategoriesCard";


const Categories = () => {
    return (
        <div className="container-fluid pt-3">
            <div className="row row-cols-3 d-flex justify-content-evenly m-1">
                <CategoriesCard to={'/content/films'} tittle={'Films'} resume={'Category resume...'} />
                <CategoriesCard to={'/content/characters'} tittle={'Characters'} resume={'Category resume...'} />
                <CategoriesCard to={'/content/planets'} tittle={'Planets'} resume={'Category resume...'} />
                <CategoriesCard to={'/content/species'} tittle={'Species'} resume={'Category resume...'} />
                <CategoriesCard to={'/content/starships'} tittle={'Starships'} resume={'Category resume...'} />
                <CategoriesCard to={'/content/vehicles'} tittle={'Vehicles'} resume={'Category resume...'} />
            </div>
        </div>
    );
}

export default Categories;