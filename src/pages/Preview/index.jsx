import React from "react";
import './preview.css';
import { useRedirectAfterDelay } from '../../hooks/useRedirectAfterDelay';

const Preview = () => {

  useRedirectAfterDelay('/home', 5500);

  return (
    <div className="preview-body">
      <div className="bienvenida">
        <h1 className="titulo-bienvenida">BIENVENIDO</h1>
        <p className="parrafo-bienvenida">Este es mi portafolio personal</p>
      </div>
      <div className="preview-izquierda"></div>
      <div className="preview-derecha"></div>
      <div className="preview-destello"></div>
    </div>
  );
};

export { Preview };