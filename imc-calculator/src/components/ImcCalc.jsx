import { useState } from "react";
import Button from "./Button";

import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedvalue = validDigits(e.target.value);
    setHeight(updatedvalue);
  };

  const handleWeightChange = (e) => {
    const updatedvalue = validDigits(e.target.value);
    setWeight(updatedvalue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              id="height"
              name="height"
              value={height}
              onChange={(e) => handleHeightChange(e)}
              placeholder="Ex: 1,80"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => handleWeightChange(e)}
              placeholder="Ex: 70.5"
              required
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
