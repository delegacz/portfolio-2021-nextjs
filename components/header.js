import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './menu'

export default function Header()  {
    return (
       <div className="header">
           <div className="branding">
                <Link href="/">
                    <Image src="/logo.svg" width="96" height="38"/>
                </Link>
           </div>
           <div className="menu">
              <Menu/> 
           </div>
       </div>
    )
}