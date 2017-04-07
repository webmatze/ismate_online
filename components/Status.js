import styled from 'styled-components'

const StatusText = styled.h1`
  display: block;
  font-size: 10em;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
`

export default (props) => (
  <StatusText>
    {props.state ? 'Yup!' : 'Nope.'}
  </StatusText>
)
