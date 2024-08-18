import React from "react";
import styled from "styled-components";
import Logo from "../assets/rural_link_logo.png";
import Menu from "../assets/menu.png";
import Mypage from "../assets/mypage.png";
import { Link } from "react-router-dom";

const HeaderContainer=styled.header`
    width: 100vw;
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-top: 31px;
  padding-bottom: 26px;
`;

const LogoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 20px;
    }
  }
  margin-right: 20px;
`;

const LabelContainer=styled.div`
    width: 100vw;
    height: 44px;
    background-color: #83BF5D;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MenuContainer>
        <LogoContainer>
          <Link to="/">
          <img src={Logo} alt="logo" />
          </Link>
        </LogoContainer>
        <Nav>
          <ul>
            <li>
              <img src={Mypage} alt="mypage" />
            </li>
            <li>
              <img src={Menu} alt="menu" />
            </li>
          </ul>
        </Nav>
      </MenuContainer>
      <LabelContainer/>
    </HeaderContainer>
  );
};
export default Header;
