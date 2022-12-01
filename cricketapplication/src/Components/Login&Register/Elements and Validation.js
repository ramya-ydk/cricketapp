import React, { useState } from "react";
import Styles from "./Component.module.css";

export const validate = (element) => {
  // returns true when it's error
  if (element["required"]) {
    if (element["type"] === "text" || element["type"] === "password" || element["type"] === "number") {
      return element["value"].length < element.pattern.min || element["value"].length > element.pattern.max;
    } else if (element["type"] === "email") {
      return !element.pattern.regEx.test(element["value"]);
    } else if (element["type"] === "select") {
      return element["value"].toString().length <= 0;
    }
  } else {
    return false;
  }
};

export const FormInputs = ({ inputType, values, required, label, handleChange, options, error, errorMsg }) => {
  const [passwordState, setPasswordState] = useState("password");

  const pwToggle = () => {
    passwordState === "password" ? setPasswordState("text") : setPasswordState("password");
  };

  const myTimeout = setTimeout(pwToggle, 3000);
  passwordState === "password" && clearTimeout(myTimeout);

  const switchFunction = () => {
    switch (inputType) {
      case "text":
      case "date":
        return (
          <>
            <input
              className={Styles.Inputbox}
              type={inputType}
              value={values}
              style={{
                borderColor: error === false ? "green" : "red",
                marginBottom: error === false ? "10px" : "",
              }}
              placeholder={label}
              required={required}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            <div className={Styles.ErrorMsg} style={{ display: error === false ? "none" : "block" }}>
              {error ? errorMsg : ""}
            </div>
          </>
        );
      case "number":
        return (
          <>
            <input
              className={Styles.Inputbox}
              type={inputType}
              value={values}
              style={{
                borderColor: error === false ? "green" : "red",
                marginBottom: error === false ? "10px" : "",
              }}
              placeholder={label}
              required={required}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            <div className={Styles.ErrorMsg} style={{ display: error === false ? "none" : "block" }}>
              {error ? errorMsg : ""}
            </div>
          </>
        );
      case "email":
        return (
          <>
            <input
              className={Styles.Inputbox}
              type={inputType}
              value={values}
              style={{
                borderColor: error === false ? "green" : "red",
                marginBottom: error === false ? "10px" : "",
              }}
              placeholder={label}
              required={required}
              onChange={({ target }) => {
                handleChange(target.value);
              }}
            />
            <div className={Styles.ErrorMsg} style={{ display: error === false ? "none" : "block" }}>
              {error ? errorMsg : ""}
            </div>
          </>
        );
      case "password":
        return (
          <>
            <div className={Styles.PWcontainer}>
              <input
                className={Styles.Inputbox}
                type={passwordState}
                value={values}
                style={{
                  borderColor: error === false ? "green" : "red",
                  marginBottom: error === false ? "10px" : "",
                }}
                placeholder={label}
                required={required}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              />
              <i
                className={`${Styles.eyeSlash} ${passwordState === "password" ? " fa fa-eye " : " fa fa-eye-slash "}`}
                style={{
                  color: passwordState === "password" ? "darkgrey" : "#005CC8",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
                onClick={() => {
                  pwToggle();
                }}
              ></i>
            </div>
            <div className={Styles.ErrorMsg} style={{ display: error === false ? "none" : "block" }}>
              {error ? errorMsg : ""}
            </div>
          </>
        );
      case "select":
        return (
          <>
            <select
              value={values || "DEFAULT"}
              className={Styles.Inputbox + " " + Styles.selectionBox}
              name={label}
              required={required}
              style={{
                borderColor: error === false ? "green" : "red",
                marginBottom: error === false ? "10px" : "",
              }}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            >
              <option value={"DEFAULT"} disabled hidden>
                {label}
              </option>
              {options.map((item, ind) => {
                return (
                  <option key={ind} className={Styles.selectionOptions} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            <div className={Styles.ErrorMsg} style={{ display: error === false ? "none" : "block" }}>
              {error ? errorMsg : ""}
            </div>
          </>
        );
      default:
        return 0;
    }
  };
  return switchFunction();
};
