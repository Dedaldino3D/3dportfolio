import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description, Title } from "../About/styles";
import {
  ContactContainer,
  FormContact,
  InfoContact,
  ContactInfoCard,
  Input,
  Textarea,
  Button,
} from "./styles";

interface State {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface OwnProps extends React.ComponentPropsWithoutRef<"h1"> {
  sendMessage?: void;
}

const Contact = React.forwardRef<HTMLHeadingElement, OwnProps>((props, ref) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setState((cs: State) => ({
      ...cs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("State: ", state);
    console.log("Submiting message to dedaldinoantonio7@gmail.com");
  };

  return (
    <ContactContainer>
      <Title ref={ref}>Contact</Title>
      <Description>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Description>
      <div>
        <InfoContact data-aos="fade-right" data-aos-offset="300">
          <ContactInfoCard>
            <span>
              <FaMapMarkerAlt />
            </span>
            <div>
              <h1>Location:</h1>
              <p>Luanda, Angola C: S/N, Apart. RC</p>
            </div>
          </ContactInfoCard>
          <ContactInfoCard>
            <span>
              <FaEnvelope />
            </span>
            <div>
              <h1>Email:</h1>
              <p>dedaldinoantonio7@gmail.com</p>
            </div>
          </ContactInfoCard>
          <ContactInfoCard>
            <span>
              <FaPhoneAlt />
            </span>
            <div>
              <h1>Call:</h1>
              <p>+244 946334643</p>
            </div>
          </ContactInfoCard>
        </InfoContact>
        <FormContact
          method="POST"
          onSubmit={handleSubmit}
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <Input
            type="text"
            style={{ marginRight: "10px" }}
            placeholder="Your name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Your email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            style={{ width: "100%" }}
            placeholder="Subject"
            name="subject"
            value={state.subject}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Message"
            name="message"
            value={state.message}
            onChange={handleChange}
          />
          <Button type="submit">Send message</Button>
        </FormContact>
      </div>
    </ContactContainer>
  );
});

export default Contact;
