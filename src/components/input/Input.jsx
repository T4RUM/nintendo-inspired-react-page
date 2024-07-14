import React from "react";
import "./Input.css";

function Input({
  label,
  id,
  type,
  maxLength,
  minLength,
  placeholder,
  description,
  options,
}) {
  return (
    <div className="labelInputWrapperInner">
      <div className="containerLabel">
        <label className="labelFormularioCadastro" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="caixaInput">
        {type === "select" ? (
          <select className="inputFormularioCadastro" id={id}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="inputFormularioCadastro"
            type={type}
            id={id}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholder}
          />
        )}
        {description && (
          <span className="descricaoInputCadastro">{description}</span>
        )}
      </div>
    </div>
  );
}

export default Input;
