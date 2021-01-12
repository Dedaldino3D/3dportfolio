import React from "react";
import AliceCarousel from "react-alice-carousel";
import { AnimationType } from "react-alice-carousel/lib/types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { Description, Title } from "../About/styles";
import { TestimonialsContainer, TestiCard, ListTestimonials } from "./styles";
import image from "../../images/back_3d.jpg";

const Testmonials = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props: any, ref) => {
  return (
    <TestimonialsContainer>
      <Title ref={ref} style={{ margin: "0 10px" }}>
        Testimonials
      </Title>
      <Description style={{ padding: "0 10px" }}>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Description>
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
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={image} alt="" />
    <h3>Denilson Gulgallar</h3>
    <h4>CEO &amp; Founder</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="100">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={image} alt="" />
    <h3>Ursula Von der Lein</h3>
    <h4>Europe Comitee</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="200">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={image} alt="" />
    <h3>Helena bulgoza</h3>
    <h4>Store Owner</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="300">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={image} alt="" />
    <h3>Donald Trump</h3>
    <h4>Freelancer</h4>
  </TestiCard>,
  <TestiCard data-aos="fade-up" data-aos-delay="400">
    <p>
      <FaQuoteLeft className="quote-icon-left" />
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
      <FaQuoteRight className="quote-icon-right" />
    </p>
    <img src={image} alt="" />
    <h3>Marcela Aguillar</h3>
    <h4>Entrepreneur</h4>
  </TestiCard>,
];

export default Testmonials;
