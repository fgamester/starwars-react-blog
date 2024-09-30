import React from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "../components/CategoriesCard";


const Categories = () => {
    return (
        <div className="container-fluid pt-3">
            <div className="row row-cols-3 d-flex justify-content-evenly m-1">
                <CategoriesCard to={'/content/films'} tittle={'Films'} resume={'Categorie resume...'} />
                <CategoriesCard to={'/content/characters'} tittle={'Characters'} resume={'Categorie resume...'} />
                <CategoriesCard to={'/content/planets'} tittle={'Planets'} resume={'Categorie resume...'} />
                <CategoriesCard to={'/content/species'} tittle={'Species'} resume={'Categorie resume...'} />
                <CategoriesCard to={'/content/starships'} tittle={'Starships'} resume={'Categorie resume...'} />
                <CategoriesCard to={'/content/vehicles'} tittle={'Vehicles'} resume={'Categorie resume...'} />
            </div>
        </div>
    );
}

export default Categories;