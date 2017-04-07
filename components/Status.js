import styled from 'styled-components'

const StatusText = styled.h1`
  display: block;
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`

export default (props) => (
  <StatusText>
    {props.state ? 'Yup!' : 'Nope.'}
  </StatusText>
)
