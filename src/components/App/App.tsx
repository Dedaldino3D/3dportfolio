import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashRouter } from "react-router-dom";

import Header from "../Header";
import Home from "../Home";
import BackTop from "../BackTop";
import GlobalStyles from "../Styles";
import { ButtonNav } from "../Home/styles";

interface Props {
  ref: any;
}

// const Button = React.forwardRef((props, ref) => {
//   const [td, setTd] = useState(false);
//   const toggle = () => {
//     ref.current.style = "backgroud: #fff";
//     setTd(!td);
//   };

//   return (
//     <ButtonNav onClick={toggle} type="button" className="mobile-nav-toggle">
//       {!td ? (
//         <span>
//           <FaBars />
//         </span>
//       ) : (
//         <span>
//           <FaTimes />
//         </span>
//       )}
//     </ButtonNav>
//   );
// });

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);
  const portRef = useRef<HTMLHeadingElement>(null);
  const testRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);

  return (
    <HashRouter>
      <GlobalStyles />
      {/* <Button ref={ref} /> */}
      <Header
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
      <BackTop ref={homeRef} />
    </HashRouter>
  );
}

export default App;
