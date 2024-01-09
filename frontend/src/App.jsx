import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, HomeLayout, PrivateRoute } from "./Pages/Layouts";
import {
  Home,
  ShopLocal,
  About,
  ProductsToAvoid,
  AddProfessional,
  AddBusiness,
  Pricing,
  Register,
  SingleShop,
} from "./Pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
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
                path: "shops/:id",
                element: <SingleShop />,
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
            ],
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "*",
      //   element: <Error />,
      // },

      // {
      //   path: "checkout",
      //   element: <PrivateRoute />,
      //   children: [{ index: true, element: <Checkout /> }],
      // },
      // {
    ],
  },
  {
    path: "/register",
    element: <Register />,
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
