import '../styles/globals.css'
import Header from '../components/header'
import Layout from '../components/layout'
import Pointer from '../components/pointer'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Pointer/>
  <Layout>
    <Header/>
    <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
