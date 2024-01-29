import styled from "styled-components";

const SubmitBtn = () => {
  return (
    <SubmitButton type="submit" className="btn">
      Submit
    </SubmitButton>
  );
};

export default SubmitBtn;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem;
`;
