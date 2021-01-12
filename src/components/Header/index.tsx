import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHome,
  FaRegUser,
  FaDatabase,
  FaEnvelope,
  FaLayerGroup,
} from "react-icons/fa";

import Footer from "../Footer";
import {
  HeaderContainer,
  InfoHeader,
  SocialInfo,
  Avatar,
  Menu,
} from "./styles";

import dedaimg from "../../images/3dimg.jpg";

interface OwnProps {
  refs: any;
}

const Header = ({ refs }: OwnProps) => {
  const location = useLocation();
  console.log("refs: ", refs)

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        scrollSmoothHandler(refs.homeRef);
        break;
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "/contact":
        scrollSmoothHandler(refs.contactRef);
        break;
      case "/testimonials":
        scrollSmoothHandler(refs.testRef);
        break;
      case "/services":
        scrollSmoothHandler(refs.servicesRef);
        break;
      case "/skills":
        scrollSmoothHandler(refs.skillsRef);
        break;
      case "/portfolio":
        scrollSmoothHandler(refs.portRef);
        break;
      default:
      // ignore
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      <Avatar src={dedaimg} />
      <InfoHeader>
        <h1>Dealdino A. 3D</h1>
        <SocialInfo>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaGithub />
          </span>
        </SocialInfo>
      </InfoHeader>
      <div>
        <Menu>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active-location">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-location">
                <FaRegUser />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active-location">
                <FaLayerGroup />
                Portifolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active-location">
                <FaDatabase />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-location">
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
          </ul>
        </Menu>
        <Footer />
      </div>
    </HeaderContainer>
  );
};

export default Header;
