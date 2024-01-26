import styled from "styled-components";

const PricingCard = ({ title, price, features }) => {
  return (
    <Wrapper>
      <div className="pricing-card">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          {/* <p className="price">$ {price}/month</p> */}
          <p className="price">$ {price}</p>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="btn-black">subsicribe</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingCard;

const Wrapper = styled.section`
  .pricing-card {
    border: 1px solid #ddd;
    border-radius: var(--radius);
    padding: 1.5rem;
    text-align: center;
    min-width: 350px;
    min-height: 400px;
    margin: auto;
    background-color: var(--clr-primary-5);

    .card-header {
      /* background-color: var(--clr-primary-5); */
      border-bottom: 1px solid var(--clr-black);
      padding: 0.75rem 0;
    }
    .card-body {
      padding: 1.25rem 0;

      .price {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 0 1.5rem 0;
        color: var(--clr-black);
      }

      .features-list {
        list-style: none;
        padding: 0;
        li {
          margin-bottom: 10px;
          text-align: left;
        }
      }
      button {
        margin-top: 3rem;
      }
    }
  }
`;
