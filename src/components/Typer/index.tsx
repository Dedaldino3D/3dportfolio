import { useEffect, useState } from "react";

import "./styles.css";

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
};

interface OwnProps {
  messages: string[];
  heading: string;
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
    let timer = null;
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
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs,
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(cs) {
    return cs.isDeleting
      ? cs.message.substring(0, cs.text.length - 1)
      : cs.message.substring(0, cs.text.length + 1);
  }

  function getMessage(cs, data) {
    return data[Number(cs.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(cs) {
    return cs.isDeleting ? CONSTANTS.TYPING_SPEED : CONSTANTS.DELETING_SPEED;
  }

  return (
    <h1>
      {heading}&nbsp;
      <span>{state.text}</span>
      <span id="typer-cursor" />
    </h1>
  );
};

export default Typer;
