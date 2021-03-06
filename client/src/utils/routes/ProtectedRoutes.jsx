import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
// import Login from "./components/Login/Login";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const token = JSON.parse(localStorage.getItem("token"));
  return user && token ? true : false;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
