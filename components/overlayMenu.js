import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import {Link} from 'next/link'
export default function OverlayMenu(props) {
    
    function hideShow(state) {
        if(state) {
            return {visibility: 'visible'}
        }
        else {
            return {visibility: 'hidden'}
        }
    }
    

    return (
       <section className="overlay-menu" style={hideShow(props.isVisible)}>
           <ul>
               <li>
                   Work
                </li>
               <li>
                   About
                </li>
               <li>
                   Contact
                </li>
           </ul>
           <button class="overlay-menu-exit" onClick={props.changeVisibility}>x</button>
       </section>
    )
}
