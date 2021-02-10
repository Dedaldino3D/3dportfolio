import React from "react";
import AliceCarousel from "react-alice-carousel";
import { AnimationType } from "react-alice-carousel/lib/types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { Description, Title } from "../About/styles";
import { TestimonialsContainer, TestiCard, ListTestimonials } from "./styles";
import image from "../../images/back_3d.jpg";
import renee_lowe from "../../images/renee_lowe.jpg";
import jonathan from "../../images/jonathan_rowley.jpg";
import a1 from "../../images/a1.jpg";
import a3 from "../../images/a3.jpg";
import a5 from "../../images/a5.jpg";

const Testmonials = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props: any, ref) => {
  return (
    <TestimonialsContainer>
      <Title ref={ref} style={{ margin: "10px", color: "var(--text)" }}>
        Testimonials
      </Title>
      {/* <Description style={{ padding: "30px 10px" }}>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Description> */}
      <ListTestimonials>
        <AliceCarousel items={CarouselItems} {...CarouselOptions} />
      </ListTestimonials>
    </TestimonialsContainer>
  );
});

const CarouselOptions = {
  autoPlay: true,
  autoPlayInterval: 1500,
  animationDuration: 1500,
  animationType: AnimationType.SLIDE,
  disableButtonsControls: true,
  disableDotsControls: true,
  disableSlideInfo: true,
  infinite: true,
  mouseTracking: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    789: {
      items: 3,
    },
  },
};

const CarouselItems = [
  <TestiCard data-aos="fade-up">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      Sometimes people say that a company cannot be started by a single person,
      but what they don't know is that if you have strength, resilience,
      perseverance, you will go far, he helped me to create a company in such a
      short time
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={jonathan} alt="" />
    <h3>Jonathan Rowley</h3>
    <h4>CEO &amp; Founder</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="100">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      I worked with dedaldino for a long time, and during that time I discovered
      that computing is not just code.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={a1} alt="" />
    <h3>Keylane Gujo</h3>
    <h4>Entreprenuer</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="200">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      I thought there was a super problem in my system, so he solved the system
      problem in record time.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={a3} alt="" />
    <h3>Salsa Herculano</h3>
    <h4>Store Owner</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="300">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      A good programmer, the code is very organized, going according to software
      standards DRY, KISS, DAO, etc. His code is not released for production
      without a strong test (avoiding later headaches).
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={a5} alt="" />
    <h3>Robert Krizovsk</h3>
    <h4>Software Engineer</h4>
  </TestiCard>,
];

export default Testmonials;
