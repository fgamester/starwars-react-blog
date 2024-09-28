import React from "react";
import { useContext } from "react";
import { Context } from "./store/ContentContext.jsx";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./views/home.jsx";


function App() {
  const context = useContext(Context);

  if (context.loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
