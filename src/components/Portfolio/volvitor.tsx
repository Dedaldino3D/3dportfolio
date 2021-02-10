import React from "react";
import ReactBnbGallery from "react-bnb-gallery";

import v_1 from "../../images/volvitor/v_1.png";
import v_2 from "../../images/volvitor/v_2.png";
import v_3 from "../../images/volvitor/v_3.png";
import v_4 from "../../images/volvitor/v_4.png";
import v_5 from "../../images/volvitor/v_5.png";
import v_6 from "../../images/volvitor/v_6.png";
import v_7 from "../../images/volvitor/v_7.png";

import { Description } from "../About/styles";
import { PortfolioCard } from "./styles";

const PHOTOS_VOLV = [
  {
    photo: v_1,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: v_2,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: v_3,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: v_4,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: v_5,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: v_6,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: v_7,
    caption:
      "Volvitor - A chat application with messages,  video & audio calls",
    subcation: "You'll can get an account soon",
  },
];

export const VolvitorPortfolio = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <PortfolioCard onClick={() => setIsOpen(true)}>
        <img src={v_1} />
        <Description style={{ padding: "10px 10px 6px" }}>
          Volvitor - A chat application for a changed world
        </Description>
      </PortfolioCard>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS_VOLV}
        onClose={() => setIsOpen(false)}
        zIndex={99999}
        opacity={0.7}
        wrap={true}
      />
    </>
  );
};

export default VolvitorPortfolio;
