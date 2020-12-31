import React, { Component } from 'react'

export default function Hero({heroContent}) {
    console.log(heroContent)
    let count = 0
    return(
        <div className="hero">
            <h1>{ heroContent.hero_text[0].text }</h1>
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
                            return <li className="list-item-left">{li.text}</li>
                        } else {
                            return <li className="list-item-right">{li.text}</li>
                        }
                        
                    })}
                    </ul>
                }
            </div>
        </div>
    )
}


