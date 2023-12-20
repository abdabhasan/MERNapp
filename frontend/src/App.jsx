import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  HomeLayout,
  ShopLocal,
  About,
  ProductsToAvoid,
  AddProfessional,
  AddBusiness,
  Pricing,
} from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop-local",
        element: <ShopLocal />,
      },
      {
        path: "products-to-avoid",
        element: <ProductsToAvoid />,
      },
      {
        path: "add-professional",
        element: <AddProfessional />,
      },
      {
        path: "add-business",
        element: <AddBusiness />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      // {
      //   path: "checkout",
      //   element: <PrivateRoute />,
      //   children: [{ index: true, element: <Checkout /> }],
      // },
      // {
      //   path: "*",
      //   element: <Error />,
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
