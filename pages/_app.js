import '../styles/globals.css'
import Header from '../components/header'
import Layout from '../components/layout'
import Pointer from '../components/pointer'
import OverlayMenu from '../components/overlayMenu'

import { motion, AnimatePresence } from 'framer-motion'
import {useState, useEffect} from 'react'

function MyApp({ Component, pageProps, router }) {
  
  const [scrollYPos, updateScrollYPos] = useState(0)
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', updateYPos());
  },[])
  
  const updateYPos = () => {
    let pos = window.scrollY
    console.log(scrollYPos)
    updateScrollYPos(pos)
  }


  const changeVisibility = () => {
    setVisibility(!isVisible);
  }

  return (
  <div style={{overflow: 'hidden'}}>  
      <Pointer key={ router.route }/>
      <OverlayMenu isVisible={isVisible} changeVisibility={changeVisibility}/>
      <Header isVisible={isVisible} changeVisibility={changeVisibility}/>
      <Layout>
      <motion.div key={ router.route } 
      initial = "pageInitial" 
      animate = "pageAnimate" 
      exit = "pageExit" 
      variants = {
        {
          pageInitial: {
            opacity: 0,
            duration: 0.5
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              ease: 'easeIn',
              delay:.6,
              duration: .5,
            }
          }
        }
      }>

          <Component {...pageProps} />

      </motion.div>
      </Layout>
  </div>
  )
}

export default MyApp