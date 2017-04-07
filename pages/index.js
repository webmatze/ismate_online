import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Status from '../components/Status'
import Footer from '../components/Footer'

export default class extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://micro-start-qimnxjyeem.now.sh')
    const json = await res.json()
    return { status: json.status }
  }

  render () {
    return (
      <Layout>
        <Status state={this.props.status} />
        {!this.props.status && <Footer />}
      </Layout>
    )
  }
}
