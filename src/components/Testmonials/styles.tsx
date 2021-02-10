import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  padding: 20px 0;
  background: #f0f7f5;
  color: var(--white-100);
  min-height: 100vh;

  @media (max-width: 767px) {
    margin: 30px 0;
  }

  @media (min-width: 2024px) {
    max-height: 70vh;
  }
`;

export const ListTestimonials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;
  padding: 20px 0;
  max-width: 100%;
  overflow-x: auto;
`;

export const TestiCard = styled.div`
  box-sizing: content-box;
  text-align: center;
  min-height: 260px;
  max-width: 280px;
  min-width: 250px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: var(--black-200);
  }

  h4 {
    font-size: 14px;
    color: var(--blue-link);
    margin: 0;
  }

  .quote-icon-left, .quote-icon-right{
    color: var(--blue-200);
    font-size: 20px;
  }

  .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }

  .quote-icon-right{
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }

  p {
    font-style: italic;
    margin 0 15px 15px;
    padding: 20px;
    background: #fff;
    position: relative;
    color: var(--black-400);
    margin-bottom: 35px;
    border-radius: 6px;
    box-shadow: 0px 2px 15px rgba(0,0,0,0.1);
    min-height: 180px;
    max-width: 280px;
    min-width: 250px;
  }

  p::after{
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid #fff;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 20px);
  }

`;
