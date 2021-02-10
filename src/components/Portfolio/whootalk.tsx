import React from "react";
import ReactBnbGallery from "react-bnb-gallery";

import wt_1 from "../../images/whootalk/whootalk_dark/wt_1.png";
import wt_2 from "../../images/whootalk/whootalk_dark/wt_2.png";
import wt_3 from "../../images/whootalk/whootalk_dark/wt_3.png";
import wt_4 from "../../images/whootalk/whootalk_dark/wt_4.png";
import wt_5 from "../../images/whootalk/whootalk_dark/wt_5.png";

import { Description } from "../About/styles";
import { PortfolioCard } from "./styles";

const PHOTOS_DARK = [
  {
    photo: wt_1,
    caption:
      "Whootalk - A social network with posts, questios, communities, chat messages & video/audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: wt_2,
    caption:
      "Whootalk - A social network with posts, questios, communities, chat messages & video/audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: wt_3,
    caption:
      "Whootalk - A social network with posts, questios, communities, chat messages & video/audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: wt_4,
    caption:
      "Whootalk - A social network with posts, questios, communities, chat messages & video/audio calls",
    subcation: "You'll can get an account soon",
  },
  {
    photo: wt_5,
    caption:
      "Whootalk - A social network with posts, questios, communities, chat messages & video/audio calls",
    subcation: "You'll can get an account soon",
  },
];

export const WhootalkPortfolio = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <PortfolioCard onClick={() => setIsOpen(true)}>
        <img src={wt_4} />
        <Description style={{ padding: "10px" }}>
          Whootalk - Talk with anybody without language constraint, end-to-end
          encryption, posts, questions, communities, chat & groupchats
          (video/audio calls) are available.
        </Description>
      </PortfolioCard>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS_DARK}
        onClose={() => setIsOpen(false)}
        zIndex={99999}
        opacity={0.7}
        wrap={true}
      />
    </>
  );
};

export default WhootalkPortfolio;
