import styled from 'styled-components'


export const HomeContainer = styled.main`
  margin-left: 300px;
  overflow: hidden;

  @media (max-width: 1199px){
    margin-left: 0;
  }
`;

export const Info = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url("/static/media/3dimg.7f202043.jpg") top center;
  background-size: cover;

  :before{
    content: "";
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  & .hero-container {
    position: relative;
    z-index: 2;
    min-width: 300px;
    margin-left: 120px;
  }

  & h1 {
    margin: 0 0 10px 0;
    font-size: 54px;
    font-weight: 700;
    line-height: 56px;
    color: var(--white-100);
  }

  & p {
    color: var(--white-100);
    margin-bottom: 50px;
    font-size: 26px;
    font-famiy: "Poppins", Roboto, sans-serif;
  }

  & p span {
    color: var(--white-100);
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 3px solid var(--blue);
  }

  @media (min-width: 1024px){
    background-attachment: fixed;
  }

  @media (max-width: 768px){
    & h1 {
      font-size: 28px;
      line-height: 36px;
    }

    & h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }
`;


export const ButtonNav = styled.button`
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;

  .i, svg{
    color: #149ddd;
  }

  .mobile-nav-active{
    overflow: hidden;
  }
  
`;