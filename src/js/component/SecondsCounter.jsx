// SecondsCounter.js

import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [counter, setCounter] = useState(0);

  // Función que incrementa el contador cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementar el contador en 1
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // La dependencia vacía [] asegura que se ejecute solo una vez al montar el componente

  // Formatear el contador a seis dígitos
  const formattedCounter = counter.toString().padStart(6, '0');

  // Estilos CSS para el contenedor del contador
  const counterContainerStyles = {
    backgroundColor: "black",
    color: "white",
    fontFamily: "monospace",
    fontSize: "3rem",
    padding: "20px",
    letterSpacing: "20px", // Separación entre cifras
    textAlign: "center",
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)"
  };

  return (
    <div className="counter-container" style={counterContainerStyles}>
      {/* Mostrar el contador */}
      <h1>{formattedCounter}</h1>
    </div>
  );
};

export default SecondsCounter;
