import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user_context";
import { FormField, LoadingSpinner } from "../Components";
import { toast } from "react-toastify";
import styled from "styled-components";

const initialState = {
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const { register, login, authState } = useUser();
  const [userData, setUserData] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, isMember } = userData;
    if (!email || !password || (!isMember && !confirmPassword)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      const success = await login({ email, password });
      if (success) {
        navigate("/");
      }
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    // if not a memeber
    const success = await register({ email, password });
    if (success) {
      navigate("/");
    }
  };

  const toggleMember = () => {
    setUserData({ ...userData, isMember: !userData.isMember });
  };

  if (authState.loading) {
    return <LoadingSpinner />;
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <h2>{userData.isMember ? "login" : "register"}</h2>

        <FormField
          label="email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <FormField
          label="password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {!userData.isMember && (
          <FormField
            label="confirm password"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button
          className="btn btn-block"
          type="submit"
          disabled={authState.loading}
        >
          {authState.loading ? "loading..." : "submit"}
        </button>

        <p>
          {userData.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" onClick={toggleMember} className="member-btn">
            {userData.isMember ? "Register" : "Login"}
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
