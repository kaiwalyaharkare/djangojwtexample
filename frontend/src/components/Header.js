import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";
const Navbar = styled.nav`
  background-color: #99C4C8;
  height: 30px;
  border-radius: 1em;
  margin-bottom: 2rem;
`;

const Navwrapper = styled.div`
  align-content: center;
  align-items: center;
  padding-left: 30%;
  display: flex;


`;

const Heading = styled.div`
padding-right:30px;
font-size: 1.5rem;
`
const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar>
      <div>
        <Navwrapper>
          <Heading>
      WaveLabs Interview Assignment
          </Heading>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/info">Information/Readme</Link>
          <span> | </span>
          <Link to="/geolocation">Geolocation</Link>
          <span> | </span>
          {user ? (
            <p onClick={logoutUser}>Logout</p>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <>|</>
              <Link to="/register">Register</Link>
              <>|</>
           
            </>
          )}
          </Navwrapper>

          {user && <p>Hello {user.username}</p>}
      </div>
    </Navbar>
  );
};

export default Header;
