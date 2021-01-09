import styled from 'styled-components'

const FooterContainer = styled.footer`
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  :last-child{
    font-size: 12px;
  }
`;

const Footer = props => (
  <FooterContainer>
    <p>Developed by Dedaldino3D</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </FooterContainer>
)

export default Footer