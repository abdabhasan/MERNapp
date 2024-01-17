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

export const allStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const citiesByState = {
  Alabama: ["Birmingham", "Montgomery", "Mobile", "Huntsville"],
  Alaska: ["Anchorage", "Fairbanks", "Juneau", "Sitka"],
  Arizona: ["Phoenix", "Tucson", "Mesa", "Chandler"],
  Arkansas: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"],
  California: ["Los Angeles", "San Francisco", "San Diego", "San Jose"],
  Colorado: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"],
  Connecticut: ["Bridgeport", "New Haven", "Hartford", "Stamford"],
  Delaware: ["Wilmington", "Dover", "Newark", "Middletown"],
  Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
  Georgia: ["Atlanta", "Savannah", "Augusta", "Columbus"],
  Hawaii: ["Honolulu", "Pearl City", "Hilo", "Kailua"],
  Idaho: ["Boise", "Meridian", "Nampa", "Idaho Falls"],
  Illinois: ["Chicago", "Aurora", "Rockford", "Joliet"],
  Indiana: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
  Iowa: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"],
  Kansas: ["Wichita", "Overland Park", "Kansas City", "Topeka"],
  Kentucky: ["Louisville", "Lexington", "Bowling Green", "Owensboro"],
  Louisiana: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"],
  Maine: ["Portland", "Lewiston", "Bangor", "South Portland"],
  Maryland: ["Baltimore", "Frederick", "Rockville", "Gaithersburg"],
  Massachusetts: ["Boston", "Worcester", "Springfield", "Cambridge"],
  Michigan: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"],
  Minnesota: ["Minneapolis", "Saint Paul", "Rochester", "Bloomington"],
  Mississippi: ["Jackson", "Gulfport", "Southaven", "Hattiesburg"],
  Missouri: ["Kansas City", "St. Louis", "Springfield", "Columbia"],
  Montana: ["Billings", "Missoula", "Great Falls", "Bozeman"],
  Nebraska: ["Omaha", "Lincoln", "Bellevue", "Grand Island"],
  Nevada: ["Las Vegas", "Henderson", "Reno", "North Las Vegas"],
  "New Hampshire": ["Manchester", "Nashua", "Concord", "Dover"],
  "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth"],
  "New Mexico": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"],
  "New York": ["New York City", "Buffalo", "Rochester", "Yonkers"],
  "North Carolina": ["Charlotte", "Raleigh", "Greensboro", "Durham"],
  "North Dakota": ["Fargo", "Bismarck", "Grand Forks", "Minot"],
  Ohio: ["Columbus", "Cleveland", "Cincinnati", "Toledo"],
  Oklahoma: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"],
  Oregon: ["Portland", "Salem", "Eugene", "Gresham"],
  Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"],
  "Rhode Island": ["Providence", "Warwick", "Cranston", "Pawtucket"],
  "South Carolina": [
    "Columbia",
    "Charleston",
    "North Charleston",
    "Mount Pleasant",
  ],
  "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"],
  Tennessee: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
  Texas: ["Houston", "San Antonio", "Dallas", "Austin"],
  Utah: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"],
  Vermont: ["Burlington", "South Burlington", "Rutland", "Essex"],
  Virginia: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"],
  Washington: ["Seattle", "Spokane", "Tacoma", "Vancouver"],
  "West Virginia": ["Charleston", "Huntington", "Parkersburg", "Morgantown"],
  Wisconsin: ["Milwaukee", "Madison", "Green Bay", "Kenosha"],
  Wyoming: ["Cheyenne", "Casper", "Laramie", "Gillette"],
};

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

export const API_ENDPOINT = "http://localhost:5000/api";

// export const shops_url = "https://course-api.com/react-store-products";

export const single_shop_url = `https://course-api.com/react-store-single-product?id=`;
