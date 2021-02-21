import React, { Component, useState, useEffect} from 'react'
import Link from 'next/link'
import classNames from "classnames";
import { Icon, InlineIcon } from '@iconify/react';
import arrowDownCircleFill from '@iconify/icons-bi/arrow-down-circle-fill';



export default function DownloadResume() {
    const [isHovered, setHover] = useState(false)
   


    const btnClasses = classNames(
        'dwnld',
        {
            "dwnld--hovered": isHovered
        }
    )
    return(
        <button className={ btnClasses }>
            <Link href="/sample.pdf">
                <div style={ {display: "flex", alignItems: "center"}}>
                    <a target="_blank">DOWNLOAD RESUME</a>
                    <span style={{marginLeft:16, marginTop:5}}><Icon icon={arrowDownCircleFill} style={{color: '#ffffff', fontSize: '28px'}} /></span>
                </div>
            </Link>
        </button>
    )
}