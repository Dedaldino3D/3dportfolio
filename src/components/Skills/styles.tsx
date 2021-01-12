import styled from "styled-components";

export const SkillsContainer = styled.section`
  padding: 10px;
`;

export const ListSkills = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 20px 10px;
  max-width: 100%;
  overflow: hidden;
  min-height: 200px;
`;

export const Skill = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  & > span {
    padding: 10px 25px;
    border-radius: 40px;
    background: var(--blue-bold);
    color: var(--white);
    font-weight: 600;
    font-size: 14px;
    margin-left: 10px;
    width: max-content;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
      background: var(--blue-link);
    }

    svg {
      margin-left: 8px;
      background: var(--blue-70);
      color: var(--text);
      border-radius: 50%;
    }
  }

  & > svg {
    font-size: 28px;
  }
`;

export const InfoSkill = styled.p`
  font-size: 14.5px;
  font-weight: normal;
  font-style: italic;
  padding: 8px 12px;
  text-align: center;

  & > svg {
    font-size: 16px;
    color: var(--blue-70);
  }
  & > svg:first-of-type {
    margin-right: 8px;
  }

  & > svg:last-of-type {
    margin-left: 8px;
  }
`;

export const SkillDesc = styled.h3`
  color: var(--text);
  font-size: 16px;
  margin: 10px 0 5px;
`;

export const Languages = styled.ul`
  display: flex;
  flex-flow: row wrap;

  & > li {
    padding: 4px 14px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 40px;
    background: var(--blue-70);
    color: var(--text);
    width: max-content;
    margin: 10px 10px 0 0;
  }
`;
