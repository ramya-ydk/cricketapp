import React,{Suspense} from "react";
import { Route,Navigate,Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({auth}) => {
    //In this auth we can use our own logic like token checking , page permission checking etc....
  return (auth  ? <Outlet /> : <Navigate to='/login' replace />)

};
export default PrivateRoute;
