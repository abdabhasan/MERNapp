import styled from "styled-components";

const LoadingSpinner = () => {
  return <Spinner></Spinner>;
};

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--clr-primary-5);
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
