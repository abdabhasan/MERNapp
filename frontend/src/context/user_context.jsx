import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";
import { toast } from "react-toastify";
const CHECK_SESSION_ENDPOINT = "/users/checkSession";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    loading: false,
  });

  const checkUserSession = async () => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}${CHECK_SESSION_ENDPOINT}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;

      if (data.isAuthenticated) {
        setAuthState({ isAuthenticated: true, loading: false });
        return true;
      } else {
        console.log("User is not authenticated");
        setAuthState({ isAuthenticated: false, loading: false });
        return false;
      }
    } catch (error) {
      console.error("Error checking user session:", error);
      setAuthState({ isAuthenticated: false, loading: false });
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/register`,
        userData,
        { withCredentials: true }
      );

      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        loading: false,
      }));

      toast.success("Registered Successfully");

      return true;
    } catch (error) {
      const errorMsg = error.response
        ? error.response.data.errors.map((err) => err.msg).join(", ")
        : error.message;
      console.error("Registration error:", errorMsg);
      toast.error(errorMsg);
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        loading: false,
      }));
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/login`,
        credentials,
        {
          withCredentials: true,
        }
      );
      setAuthState({ isAuthenticated: true, loading: false });

      toast.success("Logged In Successfully");
      return true;
    } catch (error) {
      const errorMsg = error.response
        ? error.response.data.errors.map((err) => err.msg).join(", ")
        : error.message;
      toast.error(errorMsg);
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        loading: false,
      }));
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${API_ENDPOINT}/users/logout`, {
        withCredentials: true,
      });
      setAuthState({
        isAuthenticated: false,
        loading: false,
      });
      toast.success("Logged Out Successfully");
    } catch (error) {
      console.error("Logout error:", error.message);
      setAuthState({
        isAuthenticated: false,
        loading: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        authState,
        setAuthState,
        register,
        login,
        logout,
        checkUserSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
