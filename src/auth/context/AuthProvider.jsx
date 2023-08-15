//Libraries
import PropTypes from "prop-types";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "123",
        name: name,
      },
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...state, login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
