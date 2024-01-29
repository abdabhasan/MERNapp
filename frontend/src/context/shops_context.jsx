// import axios from "axios";
// import React, { useContext, useEffect, useReducer } from "react";
// import reducer from "../reducers/shops_reducer";
// import { API_ENDPOINT } from "../utils/constants";

// import {
//   GET_SHOPS_BEGIN,
//   GET_SHOPS_SUCCESS,
//   GET_SHOPS_ERROR,
//   GET_SINGLE_SHOP_BEGIN,
//   GET_SINGLE_SHOP_SUCCESS,
//   GET_SINGLE_SHOP_ERROR,
// } from "../actions";

// const initialState = {
//   shops_loading: false,
//   shops_error: false,
//   shops: [],
//   featured_shops: [],
//   single_shop_loading: false,
//   single_shop_error: false,
//   single_shop: {},
// };

// const ShopsContext = React.createContext();

// export const ShopsProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const fetchShops = async (url) => {
//     dispatch({ type: GET_SHOPS_BEGIN });
//     try {
//       const response = await axios(url);
//       const shops = response.data;
//       dispatch({ type: GET_SHOPS_SUCCESS, payload: shops });
//     } catch (error) {
//       dispatch({ type: GET_SHOPS_ERROR });
//     }
//   };

//   const fetchSingleShop = async (url) => {
//     dispatch({ type: GET_SINGLE_SHOP_BEGIN });
//     try {
//       const response = await axios(url);
//       const singleShop = response.data;
//       console.log("single shop", singleShop);
//       dispatch({ type: GET_SINGLE_SHOP_SUCCESS, payload: singleShop });
//     } catch (error) {
//       dispatch({ type: GET_SINGLE_SHOP_ERROR });
//     }
//   };

//   useEffect(() => {
//     fetchShops(`${API_ENDPOINT}/businesses`);
//   }, []);

//   return (
//     <ShopsContext.Provider
//       value={{
//         ...state,
//         fetchSingleShop,
//       }}
//     >
//       {children}
//     </ShopsContext.Provider>
//   );
// };

// export const useShopsContext = () => {
//   return useContext(ShopsContext);
// };
