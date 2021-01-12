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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </ServiceDesc>
        </Service>
        <Service data-aos="fade-right" data-aos-delay="100">
          <ServiceIcon>
            <FaEthernet />
          </ServiceIcon>
          <ServiceDesc>
            <h3>Network Archicteture</h3>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </ServiceDesc>
        </Service>
      </ListServices>
    </ServicesContainer>
  );
});

export default Services;
