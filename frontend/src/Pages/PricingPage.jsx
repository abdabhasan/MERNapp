import { Title, PricingCard } from "../Components";
import { pricingPlans } from "../utils/constants";
import styled from "styled-components";

const PricingPage = () => {
  return (
    <Wrapper className="page-100">
      <Title name="pricing page" />
      <div className="notes section-center">
        <p>
          <span>⁃</span> Muslim Local is free for all users until March 1st.
          Business and Professional profiles will then be asked to pay a modest
          monthly membership fee.
        </p>
        <p>
          <span>⁃</span> The first month of all new member fees will be given as
          sadaqa to The United Nations Relief and Works Agency for Palestine
          Refugees in the Near East (UNRWA).
        </p>
        <p>
          <span>⁃</span> 10% of all future fees will also be donated until the
          occupation has ended inshallah. To contribute more to the UNRWA’s
          efforts on the ground, please visit their site at
          https://donate.unrwa.org/gaza
        </p>
        <p>
          <span>⁃</span> For information on advertising opportunities, you can
          reach us at contact@muslimlocal.net
        </p>
      </div>
      <div className="container section-center">
        {pricingPlans.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            price={option.price}
            features={option.features}
          />
        ))}
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
  }

  .container {
    display: flex;
    padding-top: 3rem;
    padding-bottom: 5rem;
    justify-content: space-evenly;
  }
`;
