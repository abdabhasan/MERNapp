import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { dropdown_options } from "../../utils/constants";
import styled from "styled-components";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>
        <DropdownArrow className={isOpen ? "opend" : "closed"} />
      </DropdownButton>
      <DropdownContent open={isOpen}>
        {dropdown_options.map((option, index) => (
          <Link
            key={index}
            to={option.url}
            onClick={handleItemClick}
            className="dropdown-link"
          >
            {option.text}
          </Link>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: var(--clr-black);
  padding: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownArrow = styled.span`
  margin-left: 5px;
  border: solid var(--clr-black);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: transform 0.3s ease;

  &.opend {
    transform: rotate(-135deg);
  }
  &.closed {
    transform: rotate(45deg);
  }
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: var(--clr-grey-10);
  min-width: 200px;
  box-shadow: var(--dark-shadow);
  border-radius: var(--radius);
  z-index: 1;

  .dropdown-link {
    color: var(--clr-black);
    text-decoration: none;
    display: block;
    padding: 0.5rem 1rem !important;
    transition: padding-left 0.3s ease;

    &:hover {
      background-color: #ddd;
      padding-left: 10px !important;
    }
  }
`;
