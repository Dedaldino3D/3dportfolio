import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 0 15px;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  .about-info-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .about-info-container img {
    margin-right: 15px;

    @media (max-width: 570px) {
      margin-right: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  border-bottom: 3px solid var(--blue-70);
  color: inherit;
  padding-bottom: 14px;
  max-width: max-content;
`;

export const AboutStack = styled.div`
  display: flex;
  justify-content: space-between;
  & > ol {
    list-style: circle;
  }
`;

export const Stack = styled.li`
  font-weight: 600;
  font-size: 13px;
`;

export const Description = styled.p`
  padding: 0 0 20px;
  font-size: 16px;
`;

export const AboutInfo = styled.div`
  @media (min-width: 992px){
    flex: 0 0 auto 66.66666%;
    width: 66.66666%;
    padding-left: 10px;
  }
  h1 {
    font-size: 24px
    font-weight: 700;
    color: var(--blue-bold);
  }
`;

export const Img = styled.div`
  border-radius: 4px;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: 300px;
  }

  @media (max-width: 540px) {
    max-width: 100%;
  }

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 33.333333%;
    padding-right: 10px;
  }
`;
