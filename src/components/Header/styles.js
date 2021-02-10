import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  transition: all ease-in-out 0.5s;
  z-index: 9997;
  transition: all 0.5s;
  padding: 0 15px;
  background: #264653;
  color: #fff;
  overflow-y: auto;
  box-shadow: var(--bs-xl);

  @media (max-width: 1188px) {
    left: -300px;
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    height: calc(100vh - 280px);
  }
`;

export const SocialInfo = styled.div`
  padding: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;

  & a {
    cursor: pointer;
    padding: 8px;
    background: var(--blue-light);
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
`;

export const InfoHeader = styled.div`
  h1 {
    font-weight: 600;
    color: var(--black-100);
    font-size: 24px;
    margin-bottom: 10px;
    padding: 0;
    text-align-last: center;
  }
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 10px solid #2c2f3f;
  margin: 15px auto;
  display: block;
  object-fit: cover;
`;

export const Menu = styled.nav`
  max-width: 100%;
  margin: 20px 0;
  & > ul {
    width: 100%;
  }

  & > li {
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;

    :hover {
      background: var(--blue-light);
      color: var(--white-100);
    }
  }

  .active-location {
    background: var(--blue-bold);
  }

  a {
    font-size: 16px;
    display: flex;
    align-items: center;
    color: var(--white-100);
    margin-right: 4px;
    padding: 10px;
    text-align: center;
    padding: 10px;
    width: 100%;

    svg {
      margin-right: 8px;
      font-size: 22px;
    }
  }
`;
