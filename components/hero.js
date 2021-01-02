import React, { Component } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import DownloadResume from '../components/downloadResume'
export default function Hero({heroContent}) {
    console.log(heroContent)
    let count = 0
    return(
        <div className="hero">
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
            }}>{ heroContent.hero_text[0].text }</motion.h1>
            <div className="hero-content-wrapper">
            <div className="hero-tagline">
                <p>{ heroContent.hero_paragraph[0].text }</p>
            </div>
            <div className="capability-list">
                {
                    <ul> 
                        <span className="list-head">Capability</span>{
                        heroContent.capabilities_list.map((li,count) => {
                            count++;
                            if( count%2 === 0 ) {
                                return <li key={count} className="list-item-left">{li.text}</li>
                            } else {
                                return <li key={count} className="list-item-right">{li.text}</li>
                            }
                        })}
                    </ul>
                }
            </div>
            </div>
            <DownloadResume/>
        </div>
    )
}


