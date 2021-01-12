import styled from "styled-components";

export const ServicesContainer = styled.section`
  padding: 10px;
`;

export const ListServices = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;

export const Service = styled.li`
  display: flex;
  margin: 10px 0 10px 10px;
  max-width: 380px;
  max-height: 350px;
`;

export const ServiceIcon = styled.span`
  padding: 15px;
  border-radius: 50%;
  background: var(--blue-70);
  display: flex;
  align-iems: center;
  height: max-content;

  svg {
    font-size: 24px;
  }
`;

export const ServiceDesc = styled.div`
  margin-left: 20px;
  font-size: 14px;

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    letter-spacing: 1.5px;
  }
`;
