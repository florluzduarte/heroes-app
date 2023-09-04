import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to="/marvel" />;
};

PublicRoutes.propTypes = {
  children: PropTypes.any,
};
