import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";
import { useUser } from "../../context/user_context";

const LoginBtn = () => {
  const { authState, logout, checkUserSession } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    checkUserSession();
  }, []);

  const handleLoginBtn = async () => {
    if (authState.isAuthenticated) {
      navigate("/");
      logout();
      return;
    }
    if (!authState.isAuthenticated) {
      navigate("/register");
      return;
    }
  };

  return (
    <Wrapper>
      {authState.isAuthenticated ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            handleLoginBtn();
          }}
        >
          logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            handleLoginBtn();
          }}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

export default LoginBtn;

const Wrapper = styled.div`
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
