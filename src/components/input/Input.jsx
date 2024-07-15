import React from "react";
import { useFormContext } from "react-hook-form";
import "./Input.css";

function Input({
  label,
  id,
  type = "text",
  maxLength,
  placeholder,
  description,
  options,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = errors && errors[id];

  const validationRules = {
    required: `${label} é obrigatório`,
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: `Máximo de ${maxLength} caracteres`,
      },
    }),
  };

  return (
    <div className="labelInputWrapperInner">
      <div className="containerLabel">
        <label className="labelFormularioCadastro" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="caixaInput">
        {type === "select" ? (
          <select
            className={`inputFormularioCadastro ${
              hasError ? "invalidInput" : ""
            }`}
            id={id}
            {...register(id, validationRules)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={`inputFormularioCadastro ${
              hasError ? "invalidInput" : ""
            }`}
            type={type}
            id={id}
            maxLength={maxLength}
            placeholder={placeholder}
            {...register(id, validationRules)}
          />
        )}
        {description && !hasError && (
          <span className="descricaoInputCadastro">{description}</span>
        )}
        {hasError && <small className="invalid">{errors[id]?.message}</small>}
      </div>
    </div>
  );
}

export default Input;
