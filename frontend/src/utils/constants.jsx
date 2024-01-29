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
    text: "About us",
    url: "/about",
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
    text: "About us",
    url: "/about",
  },
  {
    id: 3,
    text: "Shop local",
    url: "/shop-local",
  },
  {
    id: 4,
    text: "Products to avoid",
    url: "/products-to-avoid",
  },
  {
    id: 5,
    text: "add a business",
    url: "/add-business",
  },
  {
    id: 6,
    text: "add a professional",
    url: "/add-professional",
  },
  {
    id: 7,
    text: "pricing",
    url: "/pricing",
  },
];

export const dropdown_options = [
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

export const businessTypes = [
  "Convenience Store",
  "Clothing/Apparel",
  "Entertainment",
  "Event Hall",
  "Food/Drink",
  "Restaurant",
  "Catering",
  "Cafe/Drinks",
  "Furniture",
  "Gas Station",
  "Grocery",
  "Health/Beauty",
  "Salon/Boutique",
  "Barbershop",
  "Gym",
  "Jewelry",
  "Religious/Non-Profit",
  "Travel",
  "Other",
];

export const professions = [
  "Art/Photography",
  "Auto/Transportation",
  "Child Care",
  "Cleaning",
  "Contractor/Trade",
  "Counseling",
  "Design",
  "Education/Training",
  "Financial",
  "Accounting/Taxes",
  "Banking",
  "Consulting/Advising",
  "Beauty",
  "Fitness/Nutrition",
  "Housing",
  "Real Estate Agents",
  "For Rent/Sale",
  "Legal",
  "Maintenance/Handyman",
  "Medical",
  "Music/Media",
  "Tech/Computer Services",
  "Other",
];

export const pricingPlans = [
  {
    title: "Business",
    price: "Free",
    features: ["Free ", "Free ", "Free "],
  },
  {
    title: "professional",
    price: "Free",
    features: ["Free ", "Free ", "Free "],
  },
  // {
  //   title: "Basic Plan",
  //   price: "10",
  //   features: ["Feature 1", "Feature 2", "Feature 3"],
  // },
];

export const API_ENDPOINT = "http://localhost:5000/api";
