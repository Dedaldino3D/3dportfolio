import React from "react";
import {
  FaDatabase,
  FaDesktop,
  FaEthernet,
  FaLayerGroup,
  FaServer,
  FaSlidersH,
} from "react-icons/fa";
import { Title } from "../About/styles";
import {
  ServicesContainer,
  ListServices,
  Service,
  ServiceIcon,
  ServiceDesc,
} from "./styles";

const Services = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props: any, ref) => {
  return (
    <ServicesContainer>
      <Title ref={ref}>Services</Title>
      <ListServices>
        <Service data-aos="fade-right">
          <ServiceIcon>
            <FaDatabase />
          </ServiceIcon>
          <ServiceDesc>
            <h3>Database Management</h3>
            <p>
              Build a robust foundation at the database level that is essential
              to developing applications and strategies. As your partner, I give
              you confidence that your most valuable asset is always available,
              secure and high performing.
            </p>
          </ServiceDesc>
        </Service>
        <Service data-aos="fade-left">
          <ServiceIcon>
            <FaDesktop />
          </ServiceIcon>
          <ServiceDesc>
            <h3>Software Development</h3>
            <p>
              Design and development of a modern software as well as robust and
              complex software for your business with ascending and safety
              technologies
            </p>
          </ServiceDesc>
        </Service>
        <Service data-aos="fade-left" data-aos-delay="100">
          <ServiceIcon>
            <FaLayerGroup />
          </ServiceIcon>
          <ServiceDesc>
            <h3>Cloud Platform Support</h3>
            <p>
              Taking our services will receive a full cloud suppport on first
              time using main infraestruture in the market, IaaS, PaaS or SaaS.
              They are AWS (Amazon Web Service), GCP (Google Cloud Platform),
              Azure, Heroku, DigitalOcean.
            </p>
          </ServiceDesc>
        </Service>
        <Service data-aos="fade-right" data-aos-delay="200">
          <ServiceIcon>
            <FaServer />
          </ServiceIcon>
          <ServiceDesc>
            <h3>API Design & Implementation</h3>
            <p>
              Design & Implementation of APIs(Application Programming
              Interface), Monolithic systems, Serverless applications as well as
              Microservices.
            </p>
          </ServiceDesc>
        </Service>
        <Service data-aos="fade-left" data-aos-delay="200">
          <ServiceIcon>
            <FaSlidersH />
          </ServiceIcon>
          <ServiceDesc>
            <h3>Web & Mobile Apps</h3>
            <p>
              Development of mobile applications using new technologies for the
              construction of complex and user friendly UI / UX framing the
              brand and the needs of users
            </p>
          </ServiceDesc>
        </Service>
      </ListServices>
    </ServicesContainer>
  );
});

export default Services;
