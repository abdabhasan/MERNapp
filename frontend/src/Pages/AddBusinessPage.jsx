import { AddBusinessForm } from "../Components";
import styled from "styled-components";

const AddBusinessPage = () => {
  return (
    <Wrapper className="page">
      <h1 className="title">Add a business</h1>
      <AddBusinessForm />
    </Wrapper>
  );
};

export default AddBusinessPage;

const Wrapper = styled.main`
  .title {
    padding: 1.5rem 0 2.5rem;
    line-height: 1.25;
    color: var(--clr-primary-5);
  }
`;
