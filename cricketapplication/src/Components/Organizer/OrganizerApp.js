import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LhnMenus } from "../lefthandnavigation/LHNmenus";
import { LeftNavigation } from "../lefthandnavigation/LHNS";
// import "./App.css";

const OrganizerApp = () => {
  return <LeftNavigation LhnMenus={LhnMenus} />;
};

export default OrganizerApp;
