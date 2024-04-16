import React from "react";
import SecondsCounter from "./SecondsCounter"; // Importa el componente SecondsCounter

const Home = () => {
  return (
    <div className="app">
      <SecondsCounter /> {/* Renderiza el componente SecondsCounter */}
    </div>
  );
};

export default Home;

