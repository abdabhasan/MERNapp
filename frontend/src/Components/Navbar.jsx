import styled from "styled-components";
import { useSidebar } from "../context/sidebar_context";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const Navbar = () => {
  const { openSidebar } = useSidebar();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-logo">
          <Logo />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="nav-links">
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <div className="dropdown">
            <Dropdown />
          </div>
        </div>
        <h3 className="nav-login">Login</h3>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: var(--clr-primary-5);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }

  .nav-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: none;
  }
  .nav-login {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      .links {
        display: flex;
        justify-content: center;
      }
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-black);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .nav-login {
      display: block;
    }
  }
`;

export default Navbar;
