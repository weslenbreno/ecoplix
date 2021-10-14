import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import {Link} from 'react-router-dom';

const Logo = styled(Link)`
  color:  ${colors.white};
  cursor: pointer;
  text-decoration: none;
`

const LoginButton = styled(Link)`
  color:  ${colors.white};
  cursor: pointer;
  text-decoration: none;
`

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  right: 0;
  left: 0;
  background-color: #000;
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  font-weight: 600;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo to="/">ECOPlix</Logo>
      <LoginButton to="/login">Login</LoginButton>
    </StyledHeader>
  );
};

export default Header;
