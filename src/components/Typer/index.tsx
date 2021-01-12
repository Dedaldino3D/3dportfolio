import { useEffect, useState } from "react";

import Container from "./styles";

const CONSTANTS = {
  DELETING_SPEED: 50,
  TYPING_SPEED: 150,
  BACK_DELAY: 2000,
};

interface OwnProps {
  messages: string[];
  heading: string;
}

interface State {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: Number;
  typingSpeed: typeof CONSTANTS.TYPING_SPEED;
}

const Typer = ({ messages, heading }: OwnProps) => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      setState((cs) => ({
        ...cs, // means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, CONSTANTS.BACK_DELAY);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs,
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(cs: State) {
    return cs.isDeleting
      ? cs.message.substring(0, cs.text.length - 1)
      : cs.message.substring(0, cs.text.length + 1);
  }

  function getMessage(cs: State, messages: string[]) {
    return messages[Number(cs.loopNum) % Number(messages.length)];
  }

  function getTypingSpeed(cs: State) {
    return cs.isDeleting ? CONSTANTS.TYPING_SPEED : CONSTANTS.DELETING_SPEED;
  }

  return (
    <Container>
      {heading}&nbsp;
      <span>{state.text}</span>
      <span id="typer-cursor" />
    </Container>
  );
};

export default Typer;
