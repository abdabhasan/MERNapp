import { AddProfessionalForm } from "../Components";
import styled from "styled-components";

const AddProfessionalPage = () => {
  return (
    <Wrapper className="page">
      <h1 className="title">Add a Professional</h1>
      <AddProfessionalForm />
    </Wrapper>
  );
};

export default AddProfessionalPage;

const Wrapper = styled.main`
  .title {
    padding: 1.5rem 0 2.5rem;
    line-height: 1.25;
    color: var(--clr-primary-5);
  }
`;
