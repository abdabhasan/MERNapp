import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ shops }) => {
  return (
    <Wrapper>
      {shops.map((shop) => {
        const {
          _id,
          image,
          businessName,
          businessType,
          state,
          city,
          street,
          bio,
        } = shop;

        return (
          <article key={_id}>
            <img src={image} alt={businessName} />
            <div>
              <h4>{businessName}</h4>
              <h5 className="business-type">{businessType}</h5>
              <div className="address">
                <p>
                  {state} ,{city}, {street}
                </p>
              </div>

              {bio && <p>{bio.substring(0, 150)}...</p>}
              <Link to={`/shops/${_id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .business-type {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .address {
    p {
      margin: 0 0 0.5rem;
    }
  }

  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
