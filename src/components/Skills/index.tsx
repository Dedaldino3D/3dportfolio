import React, { useState } from "react";
import {
  FaInfo,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

import Modal from "../Modal";
import { Title, Description } from "../About/styles";
import {
  SkillsContainer,
  ListSkills,
  Skill,
  InfoSkill,
  SkillDesc,
  Languages,
} from "./styles";

interface State {
  activeMaD: boolean;
  activeBack: boolean;
  activeFront: boolean;
  activeMobi: boolean;
}

const Skills = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>((props, ref) => {
  const [state, setState] = useState({
    activeMaD: false,
    activeBack: false,
    activeFront: false,
    activeMobi: false,
  });

  const handleClick = (
    key: "activeMaD" | "activeFront" | "activeMobi" | "activeBack"
  ) => {
    setState((cs: State) => ({
      ...cs,
      [key]: !cs[key],
    }));
  };

  return (
    <SkillsContainer>
      <Title ref={ref}>Skills</Title>
      <Description data-aos="fade-up">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas
      </Description>
      <ListSkills>
        <Skill data-aos="fade-right" onClick={() => handleClick("activeMaD")}>
          <FaChevronRight />
          <span>
            Machine/Deep Learning
            <FaInfo />
          </span>
        </Skill>
        <MachineDeep
          active={state.activeMaD}
          handleClick={() => handleClick("activeMaD")}
        />
        <Skill
          data-aos="fade-down"
          data-aos-delay="100"
          onClick={() => handleClick("activeBack")}
        >
          <FaChevronRight />
          <span>
            Backend Development
            <FaInfo />
          </span>
        </Skill>
        <Backend
          active={state.activeBack}
          handleClick={() => handleClick("activeBack")}
        />
        <Skill
          data-aos="fade-left"
          data-aos-delay="200"
          onClick={() => handleClick("activeFront")}
        >
          <FaChevronRight />
          <span>
            Frontend Development
            <FaInfo />
          </span>
        </Skill>
        <Frontend
          active={state.activeFront}
          handleClick={() => handleClick("activeFront")}
        />
        <Skill
          data-aos="fade-up"
          data-aos-delay="300"
          onClick={() => handleClick("activeMobi")}
        >
          <FaChevronRight />
          <span>
            Mobile Development
            <FaInfo />
          </span>
        </Skill>
        <Mobile
          active={state.activeMobi}
          handleClick={() => handleClick("activeMobi")}
        />
      </ListSkills>
    </SkillsContainer>
  );
});

interface ModalProps {
  active: boolean;
  handleClick(): void;
}

const MachineDeep = ({ active, handleClick }: ModalProps) => {
  return (
    <Modal
      active={active}
      onClose={handleClick}
      text="Machine & Deep Learning Skills"
    >
      <InfoSkill>
        <FaQuoteLeft />
        Nearly every industry today relies on data, whether it is data about
        their clients or the success of their product. While it is easy for
        companies to get data, they need employees who can collect, organize,
        and then interpret that data.
        <FaQuoteRight />
      </InfoSkill>
      <SkillDesc>
        In this field I have some knowledge that I think it will help every
        bussiness that want to grow up your duties:
      </SkillDesc>
      <Languages>
        <li>Algorithms</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Data Analysis</li>
        <li>Data Mining</li>
        <li>Database Design</li>
        <li>Statistical Analysis</li>
      </Languages>
      <SkillDesc>
        To acknowledge the goal of your firm in this field, I use some tools:
      </SkillDesc>
      <ul>
        <li>
          <span>Languages:</span>
          <Languages>
            <li>Python</li>
          </Languages>
        </li>
        <li>
          <span>Frameworks & Libs:</span>
          <Languages>
            <li>Tensorflow</li>
            <li>Keras</li>
            <li>Scikit Learn</li>
            <li>Pytorch</li>
            <li>Numpy, Pandas, matplotlib</li>
          </Languages>
        </li>
      </ul>
    </Modal>
  );
};

const Backend = ({ active, handleClick }: ModalProps) => {
  return (
    <Modal
      active={active}
      onClose={handleClick}
      text="Backend Development Skills"
    >
      <InfoSkill>
        <FaQuoteLeft />
        Backend is the backbone of good software, the design, implementation,
        testing and deployment are central to the smooth functioning and
        viability of the system, keeping scalability in mind.
        <FaQuoteRight />
      </InfoSkill>
      <SkillDesc>
        Below, are listed some skills in this field that I acquire on my
        developer journey to build reliable and scalable systems:
      </SkillDesc>
      <Languages>
        <li>Python</li>
        <li>C/C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Erlang</li>
        <li>Django</li>
        <li>Spring/Spring Boot</li>
        <li>NodeJS</li>
        <li>API Design & Implementation</li>
        <li>WebRTC</li>
      </Languages>
      <SkillDesc>
        Databases are the central basis for storage in system, I use the
        following databases (SQL and NoSQL):
      </SkillDesc>
      <Languages>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Redis</li>
        <li>MongoDB</li>
      </Languages>
    </Modal>
  );
};

const Mobile = ({ active, handleClick }: ModalProps) => {
  return (
    <Modal
      active={active}
      onClose={handleClick}
      text="Mobile Development Skills"
    >
      <InfoSkill>
        <FaQuoteLeft />
        With the advancement of the internet, the use of mobile devices has
        increased at a high level.
        <FaQuoteRight />
      </InfoSkill>
      <SkillDesc>
        To reach this target audience I use the following technologies:
      </SkillDesc>
      <Languages>
        <li>React Native</li>
        <li>Android Studio</li>
      </Languages>
    </Modal>
  );
};

const Frontend = ({ active, handleClick }: ModalProps) => {
  return (
    <Modal
      active={active}
      onClose={handleClick}
      text="Frontend Development Skills"
    >
      <InfoSkill>
        <FaQuoteLeft />
        When we are about to meet someone, at first glance it doesn’t really
        matter if she has a good heart or good clothes, most of the time it’s
        the “face” that matters, in CS it’s not different, Frontend is very
        important.
        <FaQuoteRight />
      </InfoSkill>
      <Languages>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>VueJs</li>
        <li>HTML/CSS</li>
      </Languages>
    </Modal>
  );
};

export default Skills;
