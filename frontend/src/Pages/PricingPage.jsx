import { Title, PricingCard } from "../Components";
import { pricingPlans } from "../utils/constants";
import styled from "styled-components";

const PricingPage = () => {
  return (
    <Wrapper className="page-100">
      <Title name="Member Pricing" />
      <div className="notes section-center">
        <ul>
          <li>
            Muslim Local is free for all users at this time. At a later date, we
            will humbly request that member businesses and professionals pay a
            modest monthly fee to help cover ongoing administrative and
            operating costs.
          </li>
          <li>
            The first month of all new member fees will be given as sadaqa to
            The United Nations Relief and Works Agency for Palestine Refugees in
            the Near East (UNRWA).
          </li>
          <li>
            10% of all future fees will also be donated until the occupation has
            ended inshallah. To contribute more to the UNRWA’s efforts on the
            ground, please visit their site
            <a href="https://donate.unrwa.org/gaza" target="_blank">
              here
            </a>
          </li>
          <li>
            For information on advertising opportunities, you can reach us at 
            <a href="contact@muslimlocal.net"> contact@muslimlocal.net</a>
          </li>
        </ul>
      </div>
      <div className="container section-center">
        {/* {pricingPlans.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            price={option.price}
            features={option.features}
          />
        ))} */}
      </div>
    </Wrapper>
  );
};

export default PricingPage;

const Wrapper = styled.main`
  padding: 0;
  .notes {
    max-width: 800px;
    span {
      color: var(--clr-primary-5);
    }
    ul {
      list-style: initial;
      li {
        margin: 0.75rem 0;
        a {
          color: var(--clr-black);
          text-decoration: underline;
          &:hover {
            color: var(--clr-primary-5);
            background-color: var(--clr-black);
            transition: var(--transition);
          }
        }
      }
    }
  }

  .container {
    display: flex;
    gap: 2rem;
    padding-top: 3rem;
    padding-bottom: 5rem;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 992px) {
    ul {
      margin: 0 3rem;
    }
    .container {
      width: 75vw;
      flex-direction: column;
    }
  }
`;
