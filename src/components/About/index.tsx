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
    <Description>
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </Description>
    <div className="about-info-container">
      <Img data-aos="fade-right">
        <img src={dedaimg} alt="Dedaldino image" />
      </Img>
      <AboutInfo data-aos="fade-left">
        <h1>Full Stack Software Engineer</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
        <AboutStack>
          <ol>
            <Stack>Email: dedaldinontonio7@gmail.com</Stack>
            <Stack>Phone: +244 946334643</Stack>
          </ol>
          <ol>
            <Stack>City: Luanda, Angola</Stack>
            <Stack>Freelance: Available</Stack>
          </ol>
        </AboutStack>
        <Description data-aos="fade-up">
          Officiis eligendi itaque labore et dolorum mollitia officiis optio
          vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
          incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
          officiis quidem quia. Sed et consectetur qui quia repellendus itaque
          neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
          repellendus omnis culpa magni laudantium dolores.
        </Description>
      </AboutInfo>
    </div>
  </AboutContainer>
));

export default About;
