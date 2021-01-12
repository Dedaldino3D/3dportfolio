import styled from 'styled-components'

const FooterContainer = styled.footer`
  text-align: center;
  font-size: 14px;
`;

const Footer = () => (
  <FooterContainer>
    <p>Developed by Dedaldino3D</p>
    <p>&#169; Copyright {new Date().getFullYear()}</p>
  </FooterContainer>
)

export default Footer