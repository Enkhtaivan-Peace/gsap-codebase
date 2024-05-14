import Layout from 'a/components/layout/Layout'
import 'a/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}
