import React from 'react'
import styled from "styled-components";
import { FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Back = styled.div`
  position: fixed;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  bottom: 15px;
  right: 15px;
  background: var(--blue);
  color: var(--white-100);
  transition: display 0.5s ease-in-out;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  :hover {
    background: #2eafec;
    transition: background 0.2s ease-in-out;
  }
`;

const BackToTop = React.forwardRef((props, ref) => (
  <Back ref={ref} >
    <Link to="/"><FaChevronUp /></Link>
  </Back>
));

export default BackToTop;
