import React from "react";
import { Description, Title } from "../About/styles";
import image from "../../images/back_3d.jpg";

import WhootalPortfolio from "./whootalk";
import JorCloudPortfolio from "./jor_cloud";
import VolvitorPortfolio from "./volvitor";
import SkylinePortfolio from "./skyline";
import { PortfolioContainer, PortfolioCard } from "./styles";

const Portfolio = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props: any, ref) => {
  return (
    <PortfolioContainer>
      <Title ref={ref}>Portfolio</Title>
      <div data-aos="fade-up">
        <WhootalPortfolio />
        <SkylinePortfolio />
        <JorCloudPortfolio />
        <VolvitorPortfolio />
      </div>
    </PortfolioContainer>
  );
});

export default Portfolio;
