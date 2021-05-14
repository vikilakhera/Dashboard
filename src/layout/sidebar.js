import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";
import Footer from "./footer";
import Profile from "./profile";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #15171c;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  display: none;
  @media (max-width: 767px){
      display: block;
      margin-top: 15px;
  }
`;
  
const SidebarNav = styled.nav`
  background: black;
  background-size: cover;
  width: 250px;
  height: 100vh;
  display: block;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 11 !important;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  @media (max-width: 767px){
    left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
  }
  @media (min-width: 768px){
      left: 0;
  }
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;

const NavSearch = styled.div`
  margin-bottom: 10px;
  margin-left: 260px;
  display: flex;
  @media (max-width: 767px){
      margin-left: 20px;
  }
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    const [activeSidebar, setActiveSidebar] = useState(null);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <Nav>
                    <Profile/>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <NavSearch>
                            <h3 style={{color:"white"}}>Dashboard</h3>
                    </NavSearch>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <span style={{display: "flex"}}>
                        
                        <h2 style={{
                            color: "white",
                            padding: "20px 0 15px 10px",
                            fontFamily: "'Comfortaa', cursive, 'Times New Roman', Times, serif",
                            letterSpacing: "2px"
                        }}>Name here</h2>

                        <NavIcon tp="#">
                            <AiIcons.AiOutlineClose size={20} onClick={showSidebar} />
                        </NavIcon>
                    </span>
                    <SidebarWrap>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} color={index === activeSidebar} setActiveSidebar={setActiveSidebar} sidebarNo={index}/>;
                        })}
                    </SidebarWrap>
                </SidebarNav>
                <Footer/>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;