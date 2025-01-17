import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import BlogDetail from "../pages/BlogDetail";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import DetailProductPage from "../pages/DetailProductPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFoundPage";
import { URL_CONSTANTS } from "../constants/url.constants";
import { useSelector } from "react-redux";

const privateRoutes = [
  { path: URL_CONSTANTS.PROFILE, component: ProfilePage },
  { path: URL_CONSTANTS.CART, component: CartPage },
  { path: URL_CONSTANTS.CHECKOUT, component: CheckoutPage },
  { path: URL_CONSTANTS.NOTFOUND, component: NotFound },
];
const publicRoutes = [
  { path: URL_CONSTANTS.HOME, component: HomePage },
  { path: URL_CONSTANTS.LOGIN, component: LoginPage },
  { path: URL_CONSTANTS.REGISTER, component: RegisterPage },
  { path: URL_CONSTANTS.BLOG, component: BlogPage },
  { path: URL_CONSTANTS.CONTACT, component: ContactPage },
  { path: URL_CONSTANTS.BLOG_DETAIL, component: BlogDetail },
  { path: URL_CONSTANTS.DETAIL, component: DetailProductPage },
  { path: URL_CONSTANTS.NOTFOUND, component: NotFound },
];
const AppRouter = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Routes>
      {auth &&
        privateRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={
              auth.isAuthenticated || auth.accessToken ? (
                <route.component />
              ) : (
                <Navigate to={URL_CONSTANTS.LOGIN} replace />
              )
            }
          />
        ))}
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
