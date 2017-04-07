import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: 2rem;
  font-size: .75rem;
  a {
    color: white;
    text-decoration: underline;
    text-decoration-skip: ink;
    text-decoration-color: rgba(255,255,255,.5);
  }
`

export default (props) => (
  <Footer>
    {<a href={'https://github.com/nicolasbettag/ismate_online'}>Is Mate available again? Contribute on Github.</a>}
  </Footer>
)
