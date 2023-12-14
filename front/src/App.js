import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from "./pages/AddPatient";
import AddNote from "./pages/AddNote";
import Details from "./pages/Details";
import ModifyPatient from "./pages/ModifyPatient";
import "./styles/Home.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPatient" element={<AddPatient />} />
        <Route path="/addNote" />
        <Route path="/addNote">
          <Route path=":id" element={<AddNote />} />
        </Route>
        <Route path="/details">
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="/modify">
          <Route path=":id" element={<ModifyPatient />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
