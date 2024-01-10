import styled from "styled-components";
import { useSidebar } from "../../context/sidebar_context";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { sidebar_links } from "../../utils/constants";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {sidebar_links.map(({ id, url, text }) => {
            return (
              <li key={id} onClick={closeSidebar}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-grey-2);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-primary-10);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 65%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(300%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      width: 35%;
    }
  }
`;

export default Sidebar;
