import React, { Component, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './menu'
import classNames from "classnames";
import Logo from './logo'
import MenuTrigger from './menuTrigger'

export default function Header(props)  {
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
                            <Logo/>                           
                        </div>
                        <div className="menu">
                            <MenuTrigger isVisible={props.isVisible} changeVisibility={props.changeVisibility}/>
                        </div>
                    </div>
                    <div className={ stickyClass }>
                        <div className="branding">
                                <Logo />
                        </div>
                        <div className="menu">
                            <MenuTrigger isVisible={props.isVisible} changeVisibility={props.changeVisibility}/>
                        </div>
                    </div>
                </>
             )

            }


