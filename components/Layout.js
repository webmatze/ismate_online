import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
    background: #4502DA;
    color: #03FFB7;
  }
`

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`

export default ({children}) => (
  <Layout>
    <section>
      { children }
    </section>
  </Layout>
)
