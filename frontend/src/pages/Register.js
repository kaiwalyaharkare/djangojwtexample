import React from "react";
import styled from "styled-components";
import registerUser from "../api/Auth";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const Register = () => {
  return (
    <>
      <Wrapper>
        <form onSubmit={registerUser}>
          <Wrapper>
          <input type="text" name="username" placeholder="Enter Username" />
          <input type="password" name="password" placeholder="Enter Password" />
          <input
            type="password"
            name="password2"
            placeholder="Repeat Password"
          />
          <input type="email" name="email" placeholder="email" />
          <input type="text" name="firstname" placeholder="first_name" />
          <input type="text" name="last_name" placeholder="last_name" />
          <input type="submit" />
          </Wrapper>
        </form>
      </Wrapper>
    </>
  );
};

// {
//   "username": "",
//   "password": "",
//   "password2": "",
//   "email": "",
//   "first_name": "",
//   "last_name": ""
// }

export default Register;
