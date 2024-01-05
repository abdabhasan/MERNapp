import {
  GET_SHOPS_BEGIN,
  GET_SHOPS_SUCCESS,
  GET_SHOPS_ERROR,
  GET_SINGLE_SHOP_BEGIN,
  GET_SINGLE_SHOP_SUCCESS,
  GET_SINGLE_SHOP_ERROR,
} from "../actions";

const shops_reducer = (state, action) => {
  //  shops

  if (action.type === GET_SHOPS_BEGIN) {
    return { ...state, shops_loading: true };
  }
  if (action.type === GET_SHOPS_SUCCESS) {
    const featured_shops = action.payload.filter(
      (shop) => shop.featured === true
    );
    return {
      ...state,
      shops_loading: false,
      shops: action.payload,
      featured_shops,
    };
  }
  if (action.type === GET_SHOPS_ERROR) {
    return { ...state, shops_loading: false, shops_error: true };
  }

  //  single shop

  if (action.type === GET_SINGLE_SHOP_BEGIN) {
    return {
      ...state,
      single_shop_loading: true,
      single_shop_error: false,
    };
  }
  if (action.type === GET_SINGLE_SHOP_SUCCESS) {
    return {
      ...state,
      single_SHOP_loading: false,
      single_shop: action.payload,
    };
  }
  if (action.type === GET_SINGLE_SHOP_ERROR) {
    return {
      ...state,
      single_shop_loading: false,
      single_shop_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default shops_reducer;
