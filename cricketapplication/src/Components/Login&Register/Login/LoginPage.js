import React, { useState } from "react";
import update from "immutability-helper";
import FetchingProps from "../FetchAPI";
import { Link, useNavigate } from "react-router-dom";
// import { ReduxFetch } from "../../Redux/Login/FetchedData";
import { addDetails } from "../Redux/Login/LoginSlice";
import { connect } from "react-redux";
import Styles from "./Login.module.css";
import { FormInputs, validate } from "../Elements and Validation";

// const handleChange = ({ arrayElement, key, value },[form,setForm]) => {
//   var Copy = Object.assign(form);
//   Copy = update(Copy, { [arrayElement]: { [key]: { $set: value } } });
//   setForm(Copy);
// };
// handleChange({ arrayElement, key, value },[loginData,setLoginData])

const LoginPage = ({ UpdateDetails }) => {
  const [displayedResp, setDisplayedResp] = useState({
    message: "",
    resp: "",
  });
  const loginElement = ["name", "email", "password", "role"];
  const [loginData, setLoginData] = useState({
    name: {
      type: "text",
      value: "",
      label: "Name",
      pattern: { min: 2, max: 25 },
      error: false,
      errorMsg: "Valid name is required",
      required: true,
    },
    email: {
      type: "email",
      value: "",
      label: "E-mail",
      pattern: { regEx: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
      error: false,
      errorMsg: "Correct email format is required",
      required: true,
    },
    password: {
      type: "password",
      value: "",
      label: "Password",
      pattern: { min: 6, max: 12 },
      error: false,
      errorMsg: "Minimum 6 - 12 values required",
      required: true,
    },
    role: {
      type: "select",
      value: "",
      label: "Select Role",
      error: false,
      errorMsg: "Must select an option",
      required: true,
      options: [
        { label: "Organiser", value: "Organiser" },
        { label: "Teams", value: "Teams" },
        { label: "Player", value: "Player" },
      ],
    },
  });

  const handleChange = ({ arrayElement, key, value }) => {
    var Copy = Object.assign(loginData);
    Copy = update(Copy, { [arrayElement]: { [key]: { $set: value } } });
    setLoginData(Copy);
  };

  const handleSubmit = () => {
    setDisplayedResp({ message: "", resp: "" });
    let loginDetails = Object.assign(loginData);
    let result = {};

    for (let keys in loginDetails) {
      let validation = validate(loginDetails[keys]);
      loginDetails = update(loginDetails, {
        [keys]: { error: { $set: validation } },
      });
      result[keys] = loginDetails[keys]["value"];
    }

    let isError = Object.entries(loginDetails).some(
      ([key, element]) => element["error"] == true
    );
    if (isError) {
      console.log(result);
    } else {
      SubmitData(result);
      console.log(result);
    }
    setLoginData(loginDetails);
  };

  const history = useNavigate();
  const SubmitData = async (result) => {
    const URL = "http://localhost:5000/authentication/login";

    const response = await FetchingProps({
      base_url: URL,
      method: "POST",
      data: result,
    });
    if (response.data.msg === "Successful") {
      setDisplayedResp({
        message: "Successful",
        resp: response.data.detail,
      });
      setTimeout(() => history("/homepage"), 500);
    } else {
      setDisplayedResp({
        message: "Failure",
        resp: response.data.detail,
      });
      console.log(response);
    }
    UpdateDetails(response.data.asset);
    // ReduxFetch(response);
  };

  const renderElement = (arrayElement, arrayData) => {
    // renderElement(loginElement, loginData)
    return arrayElement.map((element) => {
      return (
        <FormInputs
          key={element}
          inputType={arrayData[element].type}
          values={arrayData[element].value}
          label={arrayData[element].label}
          required={arrayData[element].required}
          options={arrayData[element].options}
          pattern={arrayData[element].pattern}
          handleChange={(value) => {
            handleChange({ arrayElement: element, key: "value", value: value });
          }}
          error={arrayData[element].error}
          errorMsg={arrayData[element].errorMsg}
        />
      );
    });
  };

  return (
    <div className={Styles.LoginContainer}>
      <div>
        <img
          className={Styles.Logo}
          src="https://www.yuvdeekdigits.in/assets/ydkMasterLogo.png"
          alt="LOGO"
        />
      </div>
      <div className={Styles.LoginForm}>
        <span title="Enter your Login details" className={Styles.LoginTitle}>
          LOGIN
        </span>
        {renderElement(loginElement, loginData)}
        <button className={Styles.LoginSubmit} onClick={handleSubmit}>
          LOGIN
        </button>
        <div
          className={Styles.FetchedMsg}
          style={{
            display: displayedResp.resp ? "block" : "none",
          }}
        >
          <span
            style={{
              color: displayedResp.message === "Successful" ? "Green" : "Red",
            }}
          >
            {displayedResp.resp}
          </span>
        </div>
        <Link className={Styles.ForgotPW} to="/login/forgot_password">
          Forgot Password ?
        </Link>
        <Link
          className={Styles.SignUp}
          style={{ color: "green" }}
          to="/newRegister"
        >
          Sign Up
        </Link>
      </div>
      <div
        title="Back to Home"
        style={{ color: "white", margin: "40px", fontSize: "medium" }}
      >
        <i className="fa fa-home" onClick={() => history("/")} />
      </div>
    </div>
  );
};

const DispatchProps = (dispatch) => {
  return {
    UpdateDetails: (value) => dispatch(addDetails(value)),
  }; //UpdateDetails is parameter and addDetails is a redux reducer function
};
export default connect(null, DispatchProps)(LoginPage);
