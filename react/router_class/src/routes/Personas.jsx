import React from "react";
import { Link, Outlet } from "react-router-dom";

const personas = [
  {
    name: "Andres Hernandez",
    id: 1,
  },
  {
    name: "Jorge Sanchez",
    id: 2,
  },
  {
    name: "Katherine Triana",
    id: 3,
  },
  {
    name: "Estefania Santana",
    id: 4,
  },
];

function Personas() {
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {personas.map((persona) => (
          <Link key={persona.id} style={{ margin: "1rem" }} to={`/personas/${persona.id}`}>
            {persona.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Personas;
