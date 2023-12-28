import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "../Components";
import { toast } from "react-toastify";
import styled from "styled-components";
// import { registerUser, loginUser } from "../features/user/userSlice";
// import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // const { user, isLoading } = useSelector((store) => store.user);
  const isLoading = false;
  const user = "AAAA";

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      // dispatch(loginUser({ email: email, password: password }));
      console.log("isMember", { email: email, password: password });
      return;
    }
    // dispatch(registerUser({ name, email, password }));
    console.log("registerUser", { email: email, password: password });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 2500);
  //   }
  // }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <h2>{values.isMember ? "login" : "register"}</h2>

        <FormField
          label="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <FormField
          label="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {!values.isMember && (
          <FormField
            label="password again"
            type="password"
            name="repeat-password"
            value={values.password}
            onChange={handleChange}
          />
        )}
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>
        <button
          className="btn btn-block btn-hipster"
          type="button"
          disabled={isLoading}
          // onClick={() => {
          //   dispatch(
          //     loginUser({ email: "testUser@test.com", password: "secret" })
          //   );
          // }}
        >
          {isLoading ? "loading" : "demo"}
        </button>
        <p>
          {values.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  h2 {
    text-align: center;
  }

  .form {
    width: 400px;
    border-top: 5px solid var(--clr-primary-5);
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);

    .form:hover {
      box-shadow: var(--dark-shadow);
    }
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    input {
      width: 100%;
      margin-bottom: 2rem;
      padding: 0.5rem;
      border: 2px solid var(--clr-primary-5);
      border-radius: 5px;
      outline: none;
      box-shadow: var(--light-shadow);
    }
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    letter-spacing: var(--spacing);
  }

  @media screen and (max-width: 992px) {
    .form {
      width: 80vw;
    }
  }
`;
