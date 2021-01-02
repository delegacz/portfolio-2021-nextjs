import React, { Component } from 'react'
import Link from 'next/link'
import classNames from "classnames";


const btnClasses = classNames(
    'dwnld'
)

export default function DownloadResume() {
    return(
        <button className={ btnClasses }>
            <Link href="/sample.pdf"><a target="_blank">Download Resume</a></Link>
        </button>
    )
}