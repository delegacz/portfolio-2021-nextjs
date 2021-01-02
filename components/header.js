import React, { Component, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './menu'
import classNames from "classnames";

export default function Header()  {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll',handleScroll)
    },[])

    let lastScroll = 0

    const handleScroll = () => {
        const current = window.pageYOffset
        if(current <= 0) {
            setSticky(false)
        } 
        if(current > lastScroll) {
            setSticky(false)    
        }
        if(current < lastScroll) {
            setSticky(true)
        }
        if(current < 400) {
            setSticky(false)
        }
        lastScroll = current
    }
    
    const stickyClass = classNames(
        "header-sticky", {
            "header-sticky-active": isSticky,
        },
    )
        return (
                <>
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
                    <div className={ stickyClass }>
                        <div className="branding">
                            <Link href="/">
                                <Image src="/logo.svg" width="96" height="38"/>
                            </Link>
                        </div>
                        <div className="menu">
                        <Menu/> 
                        </div>
                    </div>
                </>
             )

            }


