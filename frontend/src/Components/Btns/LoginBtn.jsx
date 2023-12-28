import { useNavigate } from "react-router-dom";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";

const LoginBtn = () => {
  const myUser = false;

  const navigate = useNavigate();

  return (
    <Wrapper>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            navigate("/register");
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
