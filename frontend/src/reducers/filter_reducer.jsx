import {
  LOAD_SHOPS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_SHOPS,
  UPDATE_FILTERS,
  FILTER_SHOPS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  // Loading start

  if (action.type === LOAD_SHOPS) {
    let maxPrice = action.payload.map((shop) => shop.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_shops: [...action.payload],
      filtered_shops: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  // Loading end

  // Sorting start

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_SHOPS) {
    const { sort, filtered_shops } = state;
    let tempShops = [...filtered_shops];

    if (sort === "price-lowest") {
      tempShops = tempShops.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempShops = tempShops.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempShops = tempShops.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempShops = tempShops.sort((a, b) => b.name.localeCompare(a.name));
    }

    return { ...state, filtered_shops: tempShops };
  }

  // Sorting end

  // Filters start
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_SHOPS) {
    const { all_shops } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempShops = [...all_shops];
    // text
    if (text) {
      tempShops = tempShops.filter((shop) => {
        return shop.name.toLowerCase().startsWith(text);
      });
    }
    // category
    if (category !== "all") {
      tempShops = tempShops.filter((shop) => shop.category === category);
    }
    // company
    if (company !== "all") {
      tempShops = tempShops.filter((shop) => shop.company === company);
    }
    // colors
    if (color !== "all") {
      tempShops = tempShops.filter((shop) => {
        return shop.colors.find((c) => c === color);
      });
    }
    // price
    tempShops = tempShops.filter((shop) => shop.price <= price);
    // shipping
    if (shipping) {
      tempShops = tempShops.filter((shop) => shop.shipping === true);
    }

    return { ...state, filtered_shops: tempShops };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",

        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  // Filters end
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
