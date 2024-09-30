import React from "react";
import { useContext } from "react";
import { Context } from "./store/ContentContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./views/home.jsx";
import Categories from "./views/Categories.jsx";
import Characters from "./views/Characters.jsx";

function App() {
  const context = useContext(Context);

  if (context.loading) {
    return <div className="text-light">Loading...</div>;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/content" element={<Categories />} />
        <Route path="/content/films" element={'films in working'} />
        <Route path="/content/characters" element={<Characters />} />
        <Route path="/content/planets" element={'planets in working'} />
        <Route path="/content/species" element={'species in working'} />
        <Route path="/content/starships" element={'starships in working'} />
        <Route path="/content/vehicles" element={'vehicles in working'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
