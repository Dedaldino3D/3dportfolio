import styled from "styled-components";

export const ContactContainer = styled.section`
  max-width: 100%;
  padding: 10px;
  overflow-x: hidden;

  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const InfoContact = styled.div`
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex: 30%;
    max-width: 40%;
    margin-right: 20px;
  }
`;

export const FormContact = styled.form`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex: 50.6667%;
    max-width: 60.6667%;
    margin-top: 0;
  }
`;

export const Input = styled.input`
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 30px 8px 12px;
  margin-bottom: 0.425em;
  width: calc(50% - 10px);
  flex: 1 1 baseline;
  box-shadow: var(--bs-inset);

  :focus {
    border: 1px solid var(--blue-75);
    box-shadow: 0 0 0 4px var(--focus-ring), var(--bs-inset);
    transition: border 0.3s ease-in-out;
  }
`;

export const Textarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid var(--border);
  padding: 8px;
  min-height: 250px;
  max-height: 400px;
  overflow: auto;
  width: 100%;
  box-shadow: var(--bs-inset);

  :focus {
    border: 1px solid var(--blue-75);
    box-shadow: 0 0 0 4px var(--focus-ring), var(--bs-inset);
    transition: border 0.3s ease-in-out;
  }

  ::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-trace {
    border-radius: 8px;
    box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 25px;
  background: var(--green);
  color: var(--white);
  padding: 10px 15px;
  transition: all 0.5s ease-out;

  :hover {
    background: #264653;
    transition: background 0.3s ease;
  }
`;

export const ContactInfoCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 8px 8px 15px;

  & h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 12px 0 10px;
    font-weight: 600;
  }

  & > span {
    cursor: pointer;
    padding: 8px;
    margin-right: 4px;
    background: var(--blue-70);
    flex-shrink: 0;
    color: var(--white-100);
    border-radius: 50%;
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in-out;

    :hover {
      background: var(--blue-link);
    }

    svg {
      font-size: 20px;
      flex-shrink: 0;
    }
  }
  & p {
    font-size: 16px;
    width: max-content;
  }
`;
