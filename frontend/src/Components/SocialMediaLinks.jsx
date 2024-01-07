import { FaFacebook, FaInstagram, FaLink } from "react-icons/fa";
import { IoPlanetSharp } from "react-icons/io5";
import styled from "styled-components";

const SocialMediaLinks = ({ facebook, instagram, website, other }) => {
  return (
    <Wrapper className="social-media-links">
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <IoPlanetSharp />
        </a>
      )}
      {other && (
        <a href={other} target="_blank" rel="noopener noreferrer">
          <FaLink />
        </a>
      )}
    </Wrapper>
  );
};

export default SocialMediaLinks;

const Wrapper = styled.div`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 0.75rem;
    height: 0.75rem;
    margin: 0 0.2rem;

    transition: var(--transition);
    border-radius: var(--radius);
    svg {
      color: var(--clr-black);
    }

    &:hover {
      svg {
        color: var(--clr-primary-5);
      }
    }
  }
`;
