// import { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useShopsContext } from "../context/shops_context";
// import { LoadingSpinner } from "../Components";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import SocialMediaLinks from "../Components/SocialMediaLinks";
// const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// const SingleShopPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const {
//     single_shop_loading: loading,
//     single_shop_error: error,
//     single_shop: shop,
//     fetchSingleShop,
//   } = useShopsContext();

//   useEffect(() => {
//     fetchSingleShop(`${API_ENDPOINT}/businesses/${id}`);
//   }, []);

//   // Error and Loading handling
//   useEffect(() => {
//     console.log(error);
//     if (error) {
//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//     }
//   }, [error]);

//   if (loading) {
//     return <LoadingSpinner />;
//   }
//   if (error) {
//     return (
//       <>
//         <h2>there was an error</h2>
//       </>
//     );
//   }

//   const {
//     _id,
//     businessName,
//     businessType,
//     bio,
//     image,
//     state,
//     city,
//     street,
//     ownerFirstName,
//     ownerLastName,
//     email,
//     phone,
//     links,
//   } = shop;
//   console.log(links);
//   // console.log(links.socialMedia1);

//   return (
//     <Wrapper>
//       <div className="section section-center page">
//         <Link to="/shop-local" className="btn">
//           back to results
//         </Link>
//         <div className="shop-center">
//           {/* <ProductImages images={images} /> */}
//           <img src={image} alt="main image" className="main" />

//           <section className="content">
//             <h2>{businessName}</h2>
//             <p>sub-title here, will be added if the business accepted</p>
//             {/* <Stars stars={stars} reviews={reviews} /> */}
//             <p className="bio">
//               bio here, will be added if the business accepted
//             </p>

//             <div className="info">
//               <p>
//                 Owner : {ownerFirstName} {ownerLastName}
//               </p>

//               <p className="contact">
//                 {email}
//                 <br /> {phone}
//               </p>
//               <p>
//                 <p className="address">
//                   {state}, {city}, {street}
//                 </p>
//               </p>
//               <p>
//                 <SocialMediaLinks
//                   facebook="https://facebook.com"
//                   instagram="https://instagram.com"
//                   website="https://instagram.com"
//                   other="https://instagram.com"
//                 />
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.main`
//   .shop-center {
//     display: grid;
//     gap: 4rem;
//     margin-top: 2rem;
//   }

//   .main {
//     height: 600px;
//   }

//   img {
//     width: 100%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: cover;
//   }
//   h2 {
//     color: var(--clr-primary-5);
//   }
//   .bio {
//     line-height: 2;
//     max-width: 45em;
//   }
//   .info {
//     text-transform: capitalize;
//     .contact {
//       text-transform: none;
//       max-width: 250px;
//     }
//     .address {
//       margin-top: 1rem;
//     }
//     .social-media-links {
//       margin-top: 1rem;
//       a {
//         width: 1rem;
//       }
//     }
//   }

//   @media (min-width: 992px) {
//     .shop-center {
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//     }
//     .main {
//       height: 500px;
//     }
//   }

//   @media (max-width: 576px) {
//     .main {
//       height: 300px;
//     }
//   }
// `;

// export default SingleShopPage;
