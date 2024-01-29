// import { useShopsContext } from "../context/shops_context";
// import styled from "styled-components";
// import Error from "./Error";
// import LoadingSpinner from "./LoadingSpinner";
// import Shop from "./Shop";

// const FeaturedShops = () => {
//   const {
//     shops_loading: loading,
//     featured_shops: shops,
//     shops_error: error,
//   } = useShopsContext();

//   if (loading) {
//     return <LoadingSpinner />;
//   }
//   if (error) {
//     return <Error />;
//   }
//   return (
//     <Wrapper className="section section-center">
//       <div className="title">
//         {/* <h4>Featured</h4> */}
//         <p>Featured </p>
//         <hr />
//       </div>
//       <div className="section-center featured">
//         {shops.slice(0, 3).map((shop) => {
//           return <Shop key={shop._id} {...shop} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   background: var(--clr-grey-10);
//   padding-top: 3rem;

//   .featured {
//     margin: 4rem auto;
//     display: grid;
//     gap: 2.5rem;
//     img {
//       height: 225px;
//     }
//   }
//   .title {
//     text-align: center;
//     display: flex;
//     align-items: center;
//     gap: 1.5rem;
//     p {
//       margin: 0;
//     }
//     hr {
//       width: 100%;
//     }
//   }

//   @media (min-width: 576px) {
//     .featured {
//       grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     }
//   }
// `;

// export default FeaturedShops;
