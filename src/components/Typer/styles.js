import styled from "styled-components";

export const TyperContainer = styled.p`
  color: var(--blue-20);
  font-size: 26px;
  width: 400px;

  & > span:first-of-type {
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 3px solid var(--blue-20);
  }
  #typer-cursor {
    border-left: 0.1em solid var(--blue-20);
    animation: blink 0.7s steps(1) infinite;
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export default TyperContainer;
