import React from "react";
import { useContext } from "react";
import { Context } from "./store/ContentContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./views/home.jsx";
import Categories from "./views/Categories.jsx";
import CategoryList from "./views/CategoryList.jsx";
import SavedList from "./views/SavedList.jsx";
import ContentView from "./views/ContentView.jsx";

function App() {
  const context = useContext(Context);

  if (context.loading) {
    return <div className="text-light text-center">Loading...</div>;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/content" element={<Categories />} />
        <Route path="/content/:content_cat" element={<CategoryList />} />
        <Route path="/content/:content_cat/:id" element={<ContentView />} />
        <Route path="/:saved_list" element={<SavedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
