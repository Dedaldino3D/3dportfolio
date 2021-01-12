import  React, { useState } from "react";

import Typer from "../Typer";
import Testmonials from "../Testmonials";
import Portfolio from "../Portfolio";
import Services from "../Services";
import Skills from "../Skills";
import Contact from "../Contact";
import About from "../About";
import { HomeContainer, Info, ButtonNav } from "./styles";

interface OwnProps {
  refs: any;
}

const InfoHome = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => (
<Info >
          <div
            className="hero-container"
            data-aos="fade-in"
            data-aos-delay="100"
            ref={ref}
          >
            <h1>Dedaldino Antonio 3D</h1>
            <Typer
              heading="I'm"
              messages={[
                "Software Enginner",
                "Backend Developer",
                "Frontend Developer",
                "Mobile Developer",
                "Freelancer",
              ]}
            ></Typer>
          </div>
        </Info>
));

const Home = ({ refs }: OwnProps) => {
  return (
    <>
      <HomeContainer id="main">
        <InfoHome ref={refs.homeRef}/>
        <About ref={refs.aboutRef} />
        <Skills ref={refs.skillsRef} />
        <Services ref={refs.servicesRef} />
        <Portfolio ref={refs.portRef} />
        <Testmonials ref={refs.testRef} />
        <Contact ref={refs.contactRef} />
      </HomeContainer>
    </>
  );
};

export default Home;
