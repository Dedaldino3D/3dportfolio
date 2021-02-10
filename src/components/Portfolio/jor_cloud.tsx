import React from "react";
import ReactBnbGallery from "react-bnb-gallery";

import jc_1 from "../../images/jor_cloud/jc_1.png";
import jc_2 from "../../images/jor_cloud/jc_2.png";
import jc_3 from "../../images/jor_cloud/jc_3.png";
import jc_4 from "../../images/jor_cloud/jc_4.png";
import jc_5 from "../../images/jor_cloud/jc_5.png";
import jc_6 from "../../images/jor_cloud/jc_6.png";
import jc_7 from "../../images/jor_cloud/jc_7.png";
import jc_8 from "../../images/jor_cloud/jc_8.png";

import { Description } from "../About/styles";
import { PortfolioCard } from "./styles";

const PHOTOS_JORCLOUD = [
  {
    photo: jc_1,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_2,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_3,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_4,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_5,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_6,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_7,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
  {
    photo: jc_8,
    caption:
      "Jor Cloud - A management system with a complex dashboard (manage business metrics, finance, investments as well as notifications)",
    subcation:
      "You'll can get an account and start your business analytics soon",
  },
];

export const JorCloudPortfolio = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <PortfolioCard onClick={() => setIsOpen(true)}>
        <img src={jc_1} />
        <Description style={{ padding: "10px 10px 6px" }}>
          Jor Cloud - A management system with a great dashboard
        </Description>
      </PortfolioCard>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS_JORCLOUD}
        onClose={() => setIsOpen(false)}
        zIndex={99999}
        opacity={0.7}
        wrap={true}
      />
    </>
  );
};

export default JorCloudPortfolio;
