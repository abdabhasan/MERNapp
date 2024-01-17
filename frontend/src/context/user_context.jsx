import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    loading: true,
  });

  const checkSession = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/users/checkSession`, {
        withCredentials: true,
      });
      // Update authState based on response
      console.log("res.data:", response.data);
      setAuthState({
        isAuthenticated: response.data.isAuthenticated,
        loading: false,
      });
    } catch (error) {
      console.error("Session check error:", error.message);
      setAuthState({
        isAuthenticated: false,
        loading: false,
      });
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const register = async (userData) => {
    setAuthState({
      ...authState,
      loading: true,
    });
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/register`,
        userData
      );

      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        loading: false,
      }));

      console.log("REGISTERED SUCCESSFULLY");
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
    setAuthState({
      ...authState,
      loading: true,
    });
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/login`,
        credentials,
        {
          withCredentials: true,
        }
      );
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        loading: false,
      }));

      console.log("LOGGED IN SUCCESSFULLY");
      return true;
    } catch (error) {
      const errorMsg = error.response
        ? error.response.data.errors.map((err) => err.msg).join(", ")
        : error.message;
      console.error("Login error:", errorMsg);
      toast.error(errorMsg);
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        loading: false,
      }));
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ authState, setAuthState, register, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
