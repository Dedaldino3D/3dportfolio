import React from "react";

import dedaimg from "../../images/about_img.jpg";
import {
  AboutContainer,
  Title,
  Img,
  Stack,
  AboutStack,
  AboutInfo,
  Description,
} from "./styles";

const About = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props: any, ref) => (
  <AboutContainer>
    <Title ref={ref}>About</Title>
    {/* <Description>
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </Description> */}
    <div className="about-info-container">
      <Img data-aos="fade-right">
        <img src={dedaimg} alt="Dedaldino image" />
      </Img>
      <AboutInfo data-aos="fade-left">
        <h1>Full Stack Software Engineer</h1>
        <Description>
          I'm a software engineer with at least 3+ years on software
          development, database & system design.
        </Description>
      </AboutInfo>
    </div>
  </AboutContainer>
));

export default About;
