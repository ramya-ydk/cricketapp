import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const RouteMapping = ({
  PrivateRoute,
  routes,
  auth /* Its Only Use For Now, Handle It With ReduxStore */,
}) => {
  const RoutesMap = routes.map(({ Private, Layout = ({ children }) => <>
        {children}
      </>, modules, Component, path }) => {
    const ComponentWithLayout = () => {
      return (
        <Layout>
          <Component />
        </Layout>
      );
    };

    return Private
      ? [
          <Route key={path} element={<PrivateRoute auth={auth} path={path} />}>
            <Route
              path={path}
              element={
                <Suspense fallback={<div>..Loading..</div>}>
                  <ComponentWithLayout />
                </Suspense>
              }
            />
          </Route>,
          modules &&
            modules.map((childrenProps) => (
              <Route
                key={childrenProps.path}
                element={<PrivateRoute auth={auth} path={childrenProps.path} />}
              >
                <Route
                  path={path + childrenProps.path}
                  element={
                    <Suspense fallback={<div>..Loading..</div>}>
                      <childrenProps.Component />
                    </Suspense>
                  }
                />
              </Route>
            )),
        ]
      : [
          <Route
            key={path}
            element={
              <Suspense fallback={<div>..Loading..</div>}>
                <ComponentWithLayout />
              </Suspense>
            }
            path={path}
          />,
          modules &&
            modules.map((childrenProps) => (
              <Route
                key={path + childrenProps.path}
                element={
                  <Suspense fallback={<div>..Loading..</div>}>
                    <childrenProps.Component />
                  </Suspense>
                }
                path={path + childrenProps.path}
              />
            )),
        ];
  });

  return <Routes>{RoutesMap}</Routes>;
};

export default RouteMapping;

{
  /* [
     //   <Route key={path} element={<ComponentWithLayout />} path={path} />,
      //   modules &&
      //     modules.map((childrenProps) => (
      //       <React.Fragment>
      //       <Route
      //         key={childrenProps.path}
      //         element={() => (
      //           <Suspense fallback={<div>...Loading...</div>}>
      //             <Layout>
      //               <childrenProps.Component />
      //             </Layout>
      //           </Suspense>
      //         )}
      //         path={path + childrenProps.path}
      //       />
      //       </React.Fragment>
      //     )),
// ] */
}

{
  /* /working/ {PrivateRoute
            ({key:path,
            Element:<ComponentWithLayout />,
            path:path,
            auth:auth
        })} */
}

{
  /* <Route
      path={path+childrenProps.path}
      element={
        auth ? (
          <Suspense fallback={<div>...Loading...</div>}>
          <childrenProps.Component />
          </Suspense>
        ) : (
          <Suspense fallback={<div>...Loading...</div>}>
          <Navigate to={ "/login"} replace/>
          </Suspense>
        )
      }
    /> */
}

//working child
// modules &&
//   modules.map((childrenProps) => (
//     PrivateRoute
//       ({key:childrenProps.path,
//       Element:
//         <Suspense fallback={<div>...Loading...</div>}>
//           <Layout>
//             <childrenProps.Component />
//           </Layout>
//         </Suspense>,

//       path:path + childrenProps.path,
//       auth:auth})
//        ))
