import React from "react";
import ReactBnbGallery from "react-bnb-gallery";

import s_1 from "../../images/skyline/s_1.png";
import s_2 from "../../images/skyline/s_2.png";
import s_3 from "../../images/skyline/s_3.png";
import s_4 from "../../images/skyline/s_4.png";

import { Description } from "../About/styles";
import { PortfolioCard } from "./styles";

const PHOTOS_SKY = [
  {
    photo: s_1,
    caption: "Skyline - Increase your duties now with our services",
    subcation: "Do not waste your opportunities, get them now",
  },
  {
    photo: s_2,
    caption: "Skyline - Increase your duties now with our services",
    subcation: "Do not waste your opportunities, get them now",
  },
  {
    photo: s_3,
    caption: "Skyline - Increase your duties now with our services",
    subcation: "Do not waste your opportunities, get them now",
  },
  {
    photo: s_4,
    caption: "Skyline - Increase your duties now with our services",
    subcation: "Do not waste your opportunities, get them now",
  },
];

export const SkylinePortfolio = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <PortfolioCard onClick={() => setIsOpen(true)}>
        <img src={s_1} />
        <Description style={{ padding: "10px 10px 6px" }}>
          Skyline - We offer a great services package that definitely will
          increase your duties
        </Description>
      </PortfolioCard>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS_SKY}
        onClose={() => setIsOpen(false)}
        zIndex={99999}
        opacity={0.7}
        wrap={true}
      />
    </>
  );
};

export default SkylinePortfolio;
