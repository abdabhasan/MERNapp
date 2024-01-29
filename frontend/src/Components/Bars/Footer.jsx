import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <a href="mailto:contact@muslimlocal.net">
        <span>contact</span>@muslimlocal.net
      </a>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Muslim Local</span>
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 1rem 6rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.25rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  a {
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    span {
      color: var(--clr-primary-5);
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    height: 3.5rem;
  }
`;

export default Footer;
