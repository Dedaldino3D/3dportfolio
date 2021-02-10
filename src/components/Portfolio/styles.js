import styled from "styled-components";

export const PortfolioContainer = styled.section`
  padding: 20px 10px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
  }
`;

export const PortfolioCard = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--bs-ud);
  max-width: 300px;
  max-height: 300px;
  margin: 30px;
  transition: all 0.5s ease-out;

  :hover {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  @media (min-width: 992px) {
    flex: 25%;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1``;
