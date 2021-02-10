import React, { useState, useRef, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Header from "../Header";
import Home from "../Home";
// import BackTop from "../BackTop";
import GlobalStyles from "../Styles";
import { ButtonNav } from "../Home/styles";

interface Props {
  ref: any;
}

const Button = (props: any) => {
  const [td, setTd] = useState(false);

  const toggle = () => {
    if (!td) {
      props.dref.current.style.left = 0;
      setTd(true);
    } else {
      props.dref.current.style.left = "-300px";
      setTd(false);
    }
  };

  return (
    <ButtonNav onClick={toggle} type="button" className="mobile-nav-toggle">
      {!td ? (
        <span>
          <FaBars />
        </span>
      ) : (
        <span>
          <FaTimes />
        </span>
      )}
    </ButtonNav>
  );
};

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);
  const portRef = useRef<HTMLHeadingElement>(null);
  const testRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const ownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Dedaldino Antonio (Software Engineer)";
  }, []);

  return (
    <HashRouter>
      <GlobalStyles />
      <Button dref={ownRef} />
      <Header
        refs={{
          aboutRef,
          contactRef,
          portRef,
          testRef,
          servicesRef,
          skillsRef,
          homeRef,
          ownRef,
        }}
      />
      <Home
        refs={{
          aboutRef,
          contactRef,
          portRef,
          testRef,
          servicesRef,
          skillsRef,
          homeRef,
        }}
      />
      {/* <BackTop ref={homeRef} /> */}
    </HashRouter>
  );
}

export default App;
