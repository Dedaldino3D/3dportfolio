import React from "react";
import { Description, Title } from "../About/styles";
import image from "../../images/back_3d.jpg";
import { PortfolioContainer, PortfolioCard } from "./styles";

const Portfolio = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props: any, ref) => {
  return (
    <PortfolioContainer>
      <Title ref={ref}>Portfolio</Title>
      <div data-aos="fade-up">
        <PortfolioCard>
          <img src={image} />
        </PortfolioCard>
        <PortfolioCard>
          <img src={image} />
        </PortfolioCard>
        <PortfolioCard>
          <img src={image} />
        </PortfolioCard>
        <PortfolioCard>
          <img src={image} />
        </PortfolioCard>
        <PortfolioCard>
          <img src={image} />
        </PortfolioCard>
        <PortfolioCard>
          <img src={image} />
        </PortfolioCard>
      </div>
    </PortfolioContainer>
  );
});

export default Portfolio;
