import React, { useState } from "react";
import update from "immutability-helper";
import FetchingProps from "../FetchAPI";
import { Link, useNavigate } from "react-router-dom";
// import { ReduxFetch } from "../../Redux/Register/FetchedData";
import { addDetails } from "../Redux/Register/RegisterSlice.js";
import { connect } from "react-redux";
import Styles from "../Register/Register.module.css";
import { FormInputs, validate } from "../Elements and Validation";

// const handleChange = ({ arrayElement, key, value },[form,setForm]) => {
//   var Copy = Object.assign(form);
//   Copy = update(Copy, { [arrayElement]: { [key]: { $set: value } } });
//   setForm(Copy);
// };
// handleChange({ arrayElement, key, value },[registerData,setRegisterData])

const RegisterPage = ({ UpdateDetails }) => {
  const [displayedResp, setDisplayedResp] = useState({
    message: "",
    resp: "",
  });
  const registerElement = [
    "name",
    "userName",
    "email",
    "phoneNumber",
    "password",
    // "role",
    "profileImage",
  ];
  const [registerData, setRegisterData] = useState({
    name: {
      type: "text",
      value: "",
      label: "Name",
      pattern: { min: 2, max: 25 },
      error: false,
      errorMsg: "Valid name is required",
      required: true,
    },
    userName: {
      type: "text",
      value: "",
      label: "User-Name",
      pattern: { regEx: /^(?=^\w{3,20}$)[a-z0-9]+_?[a-z0-9]+$/ },
      error: false,
      errorMsg: "Enter Correctly (abc..) ie:sample_text",
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
    phoneNumber: {
      type: "number",
      value: "",
      label: "Mobile-Number",
      pattern: { min: 10, max: 10 },
      error: false,
      errorMsg: "Minimum 10 numbers required",
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
    // role: {
    //   type: "select",
    //   value: "",
    //   label: "Select Role",
    //   error: false,
    //   errorMsg: "Must select an option",
    //   required: true,
    //   options: [
    //     { label: "Organiser", value: "Organiser" },
    //     { label: "Teams", value: "Teams" },
    //     { label: "Player", value: "Player" },
    //   ],
    // },
    profileImage: {
      type: "file",
      label: "Upload-Image",
      error: false,
      required: false,
    },
  });

  const handleChange = ({ arrayElement, key, value }) => {
    var Copy = Object.assign(registerData);
    Copy = update(Copy, { [arrayElement]: { [key]: { $set: value } } });
    setRegisterData(Copy);
  };

  const handleSubmit = () => {
    setDisplayedResp({ message: "", resp: "" });
    let registerDetails = Object.assign(registerData);
    let result = {};
    const formData = new FormData();
    for (let keys in registerDetails) {
      let validation = validate(registerDetails[keys]);
      registerDetails = update(registerDetails, {
        [keys]: { error: { $set: validation } },
      });
      result[keys] = registerDetails[keys]["value"];
    }

    const { userName } = registerDetails;
    registerDetails = update(registerDetails, {
      ["userName"]: {
        error: { $set: !userName.pattern.regEx.test(userName["value"]) },
      },
    });

    let isError = Object.entries(registerDetails).some(
      ([key, element]) => element["error"] == true
    );
    if (isError) {
      console.log(result);
    } else {
      Object.entries(result).map(([key, value]) => formData.append(key, value));
      console.log(formData, "formData");
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      //  SubmitData(formData);
      console.log(result);
    }
    setRegisterData(registerDetails);
  };

  const history = useNavigate();
  const SubmitData = async (result) => {
    const URL = "http://localhost:5000/authentication/register";

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
      setTimeout(() => history("/login"), 500);
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
    <div className={Styles.RegisterContainer}>
      <div>
        <img
          className={Styles.Logo}
          src="https://www.yuvdeekdigits.in/assets/ydkMasterLogo.png"
          alt="LOGO"
        />
      </div>
      <div className={Styles.RegisterForm}>
        <span
          title="Enter your Register details"
          className={Styles.RegisterTitle}
        >
          SIGN UP
        </span>
        {renderElement(registerElement, registerData)}
        <button className={Styles.RegisterSubmit} onClick={handleSubmit}>
          SIGN UP
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
        <Link className={Styles.ForgotPW} to="/login">
          Already have an account ?
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
export default connect(null, DispatchProps)(RegisterPage);
