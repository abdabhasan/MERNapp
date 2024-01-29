// import {
//   LOAD_SHOPS,
//   SET_LISTVIEW,
//   SET_GRIDVIEW,
//   UPDATE_SORT,
//   SORT_SHOPS,
//   UPDATE_FILTERS,
//   FILTER_SHOPS,
//   CLEAR_FILTERS,
// } from "../actions";

// const filter_reducer = (state, action) => {
//   // Loading start

//   if (action.type === LOAD_SHOPS) {
//     return {
//       ...state,
//       all_shops: [...action.payload],
//       filtered_shops: [...action.payload],
//       filters: { ...state.filters },
//     };
//   }
//   // Loading end

//   // Sorting start

//   if (action.type === SET_GRIDVIEW) {
//     return { ...state, grid_view: true };
//   }

//   if (action.type === SET_LISTVIEW) {
//     return { ...state, grid_view: false };
//   }

//   if (action.type === UPDATE_SORT) {
//     return { ...state, sort: action.payload };
//   }

//   // ! change businessName prop to name to include proffesional and masjids also
//   if (action.type === SORT_SHOPS) {
//     const { sort, filtered_shops } = state;
//     let tempShops = [...filtered_shops];

//     if (sort === "name-a") {
//       tempShops = tempShops.sort((a, b) =>
//         a.businessName.localeCompare(b.businessName)
//       );
//     }
//     if (sort === "name-z") {
//       tempShops = tempShops.sort((a, b) =>
//         b.businessName.localeCompare(a.businessName)
//       );
//     }

//     return { ...state, filtered_shops: tempShops };
//   }

//   // Sorting end

//   // Filters start
//   if (action.type === UPDATE_FILTERS) {
//     const { name, value } = action.payload;
//     return { ...state, filters: { ...state.filters, [name]: value } };
//   }
//   // ! change businessName prop to name to include proffesional and masjids also

//   if (action.type === FILTER_SHOPS) {
//     const { all_shops } = state;
//     const { text, category, distance } = state.filters;

//     let tempShops = [...all_shops];

//     // text
//     if (text) {
//       tempShops = tempShops.filter((shop) => {
//         return shop.businessName.toLowerCase().startsWith(text);
//       });
//     }
//     // category
//     if (category !== "all") {
//       tempShops = tempShops.filter((shop) => shop.businessType === category);
//     }

//     return { ...state, filtered_shops: tempShops };
//   }

//   if (action.type === CLEAR_FILTERS) {
//     return {
//       ...state,
//       filters: {
//         ...state.filters,
//         text: "",
//         category: "all",
//         distance: 10,
//       },
//     };
//   }

//   // Filters end
//   throw new Error(`No Matching "${action.type}" - action type`);
// };

// export default filter_reducer;
