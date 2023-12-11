import "./App.css";
import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details">
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
