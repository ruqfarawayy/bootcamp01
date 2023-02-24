import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "@/src/routes/PrivateRoute";
import { Navigate } from "react-router-dom";
import URLS from "@/src/enums/urls";
import AUTH_GETTERS from "../store/modules/Auth/getters";
import { useStore } from "react-redux";

// pages
const Page404 = lazy(() => import("../pages/404"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const Auth = lazy(() => import("../pages/Auth"));
const Details = lazy(() => import("../pages/Details"));
// const DetailUser = lazy(() => import('../pages/DetailUser'))
// const Users = lazy(() => import('../pages/Users'))

const RouteStacks = () => {
  const store = useStore();
  const loggedIn = () => {
    const token = AUTH_GETTERS.loginToken(store.getState());
    return token.length > 0;
  };
  const loggedOut = () => {
    const token = AUTH_GETTERS.loginToken(store.getState());
    return token === "";
  };

  return (
    <Routes>
      <Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />
      <Route path={URLS.HOME} element={<Home />} />
      <Route
        path={URLS.PROFILE}
        element={
          <PrivateRoute
            path={URLS.PROFILE}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path={URLS.DETAILS}
        element={
          <PrivateRoute
            path={URLS.DETAILS}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <Details />
          </PrivateRoute>
        }
      />
      <Route
        path={URLS.AUTH}
        element={
          <PrivateRoute
            path={URLS.AUTH}
            allow={[loggedOut]}
            navigateTo={URLS.PROFILE}
          >
            <Auth />
          </PrivateRoute>
        }
      />

      {/* keep  <Route path="*"> being the last of siblings */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export default RouteStacks;
