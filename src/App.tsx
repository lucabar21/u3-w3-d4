import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import MainSectionComponent from "./components/MainSectionComponent";
import DetailSectionComponent from "./components/DetailSectionComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<MainSectionComponent />} />
          <Route path="/details/:articleId" element={<DetailSectionComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
