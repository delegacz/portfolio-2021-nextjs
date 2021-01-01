import '../styles/globals.css'
import Header from '../components/header'
import Layout from '../components/layout'
import Pointer from '../components/pointer'
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
  <AnimatePresence>
    <motion.div key={ router.route } initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={
      {
        pageInitial: {
          opacity: 0,
          y: -10
        },
        pageAnimate: {
          opacity:1,
          transition: {
            ease: 'easeIn',
            delay:.6,
            duration: .5,
          }
        },
        pageExit: {
          backgroundColor: '#111819',
          opacity: 0,
          y: -50,
          transition: {
              delay: .3,
              duration: .3
          }
        }
      }
    }>
      <Pointer/>
      <Layout>
        <Header/>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  </AnimatePresence>
  )
}

export default MyApp
