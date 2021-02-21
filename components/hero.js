import React, { Component } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import DownloadResume from '../components/downloadResume'
import { Grid } from '@material-ui/core'

export default function Hero({heroContent}) {
    console.log(heroContent)
    let count = 0
    return(
        <Grid container>   
        <div className="hero">
            <Grid item sm={12}>
                <motion.h1 initial="hidden" animate="visible" variants={{
                    hidden: {
                        opacity:0,
                        y: 80,
                    },
                    visible: {
                        opacity:1,
                        y: 0,
                        transition: {
                            delay: 0.6,
                            ease: 'easeOut',
                            duration: .60
                        }
                    }
                }}>{ heroContent.hero_text[0].text }</motion.h1></Grid>
            <Grid item md={12}>
                <div className="hero-content-wrapper">
                <Grid item md={8}>
                <div className="hero-tagline">
                    <p>{ heroContent.hero_paragraph[0].text }</p>
                </div></Grid>
                <Grid item md={4}>
                    <Grid container xs={12} className="capability-list">
                        <Grid item xs={12}><span className="list-head">Capability</span></Grid>
                     
                            {
                            heroContent.capabilities_list.map((li,count) => {
                                    return <Grid item xs={6}><li key={count}>{li.text}</li></Grid>
                                }
                            )}
                      
                </Grid></Grid>
                </div></Grid>
            <DownloadResume/>
        </div>
        </Grid>
    )
}


