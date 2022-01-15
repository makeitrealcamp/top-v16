import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personas from "./routes/Personas";
import Empresas from "./routes/Empresas";
import Persona from "./routes/Persona";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="personas" element={<Personas />}>
            <Route path=":personaID" element={<Persona />} />
          </Route>
          <Route path="empresas" element={<Empresas />} />
          <Route
            path="*"
            element={<h2>Ups! No se encontró lo que estabas buscando</h2>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
