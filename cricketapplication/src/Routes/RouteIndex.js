/*Sample React Router implementation*/

//In RouteIndex.js
import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.js";
import RouteMapping from "./RouterCombiner.js";

const routePaths = [
  {
    path: "/",
    index: true,
    Component: lazy(() => import("../Homepage")),
  },
  {
    path: "/login",
    Component: lazy(() =>
      import("../Components/Login&Register/Login/LoginPage")
    ),
  },
  {
    path: "/login/forgot_password",
    // Private: true,
    Component: lazy(() =>
      import("../Components/Login&Register/Login/ForgotPw")
    ),
  },
  {
    path: "/newRegister",
    Component: lazy(() =>
      import("../Components/Login&Register/Register/RegisterPage")
    ),
  },
  // {
  //   path: "/admin",
  //   Component: lazy(() => import("../Components/Pages/AdminPage")),
  //   Private: true,
  //   Layout: lazy(() => import("../Components/Layouts/AdminLayout")),
  //   modules: [
  //     {
  //       path: "/new_product",
  //       Component: () => <div>New Product</div>,
  //     },
  //     {
  //       path: "/delete_product",
  //       Component: () => <div>Delete Product</div>,
  //     },
  //   ],
  // },
  // {
  //   path: "/users",
  //   Component: () => <div>User Component Index</div>,
  //   Private: true,
  //   Layout: lazy(() => import("../Components/Layouts/PublicLayout")),
  //   modules: [
  //     {
  //       path: "/new_product",
  //       Component: () => <div>User New Product</div>,
  //     },
  //     {
  //       path: "/delete_product",
  //       Component: () => <div>User Delete Product</div>,
  //     },
  //   ],
  // },
  // {
  //   path: "/users/new_product",
  //   Private: true,
  //   Layout: lazy(() => import("../Components/Layouts/UserLayout")),
  //   modules: [
  //     {
  //       path: "/slm",
  //       Component: () => <div>User New Product slm</div>,
  //     },
  //     {
  //       path: "/bye",
  //       Component: () => <div>User Delete Product</div>,
  //     },
  //   ],
  // },
  // {
  //   path: "*",
  //   Component: lazy(() => import("../Components/Pages/ErrorHandlePage")),
  // },
];
const RouteIndex = () => {
  const auth = true;

  return (
    <React.Fragment>
      {/*Here you Place The Common Components to be displayed for whole of the application like header or footer chat bot, social buttons ,etc....*/}

      <BrowserRouter>
        <RouteMapping
          PrivateRoute={PrivateRoute}
          routes={routePaths}
          auth={auth}
        />
      </BrowserRouter>
    </React.Fragment>
  );
};
/// you can connect this here and export to app.js to provide with redux store
export default RouteIndex;
