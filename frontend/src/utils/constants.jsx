import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Shop local",
    url: "/shop-local",
  },
  {
    id: 3,
    text: "Products to avoid",
    url: "/products-to-avoid",
  },
];

export const sidebar_links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Shop local",
    url: "/shop-local",
  },
  {
    id: 3,
    text: "Products to avoid",
    url: "/products-to-avoid",
  },
  {
    id: 4,
    text: "add a business",
    url: "/add-business",
  },
  {
    id: 5,
    text: "add a professional",
    url: "/add-professional",
  },
  {
    id: 6,
    text: "pricing",
    url: "/pricing",
  },
  {
    id: 7,
    text: "About us",
    url: "/about",
  },
];

export const dropdown_options = [
  {
    id: 1,
    text: "About us",
    url: "/about",
  },
  {
    id: 2,
    text: "shop local",
    url: "/shop-local",
  },
  {
    id: 3,
    text: "add a business",
    url: "/add-business",
  },
  {
    id: 4,
    text: "add a professional",
    url: "/add-professional",
  },
  {
    id: 5,
    text: "pricing",
    url: "/pricing",
  },
  {
    id: 6,
    text: "products to avoid",
    url: "/products-to-avoid",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
