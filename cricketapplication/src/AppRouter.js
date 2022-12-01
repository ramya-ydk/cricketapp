// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./Homepage";

// const Home = lazy(() => import("./routes/Home"));
// const About = lazy(() => import("./routes/About"));

// const AppRoutes = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<About />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );

// export default AppRoutes;

import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
// import { LeftNavigation } from "../ReusableComponents/LHN/LHNS";
// import { LhnMenus } from "./Rough-Data";
import LoginPage from "./Components/Login&Register/Login/LoginPage";
import ForgotPassword from "./Components/Login&Register/Login/ForgotPw";
import RegisterPage from "./Components/Login&Register/Register/RegisterPage";
import Homepage from "./Homepage";
import ScoreCard from "./Components/scorecard/scoreCard";
import OrganizerLogin from "./Components/Organizer/OrganizerApp";
import OrganizerPage from "./Components/Organizer/OrganizerApp";
import TournamentCreateForm from "./Components/Organizer/createTournamentpage";
// import HomePage from "./Home/HomePage/HomePage";
// import RoleManagement from "./Home/Role/RoleManagement";
// import Attendance from "./Home/Attendance/Attendance";
// import ProfilePage from "./Home/Profile/Profile";
// import Styles from "./Component.module.css";

const AppRoutes = ({ logged }) => {
  return (
    <>
      {/* {!logged ? ( */}
      <Routes>
        <Route path="/" element={<Navigate to="homepage" replace />} />
        <Route path="/homepage" index element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forgot_password" element={<ForgotPassword />} />
        <Route path="/newRegister" element={<RegisterPage />} />
      </Routes>
      <Routes>
        {/* <Route path="/organizerApp" element={<OrganizerApp />} /> */}
        <Route path="/tournamentform" element={<TournamentCreateForm />} />
        <Route path="/scoreBoard" element={<ScoreCard />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forgot_password" element={<ForgotPassword />} />
        <Route path="/newRegister" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes> */}
      {/* ) : ( */}
      {/* <div className={Styles.RouteContainer}>
          <div className={Styles.LHN}>
            <LeftNavigation data={LhnMenus} />
          </div>
          <div className={Styles.HRM}>
            <Routes>
              <Route path="/" element={<Navigate to="homepage" replace />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/roleManagement" element={<RoleManagement />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="homepage" replace />} />
            </Routes>
          </div>
        </div>
      )} */}
    </>
  );
};
const StateToProps = (state) => {
  const { employeeDetails } = state;
  return {
    logged: employeeDetails.data.token,
  };
};
export default connect(StateToProps)(AppRoutes);
