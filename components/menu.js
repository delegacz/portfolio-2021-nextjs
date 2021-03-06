import React, { Component, useState, useEffect } from 'react';
import classNames from "classnames";

import Link from 'next/link'

export default function Menu() {
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        handleClick();
    },[])

    const handleClick = () => {
        const el = document.querySelectorAll('.menu-toogle')
        el.forEach(e => {
            e.addEventListener('click', changeActive);
            console.log('assigned', e)
        })
        console.log('pop')
    }

    const changeActive = () => {
        setActive(active => !active);
    }

    const menuClasses = classNames(
        'menu',
        {
            'menu-active': active,
        }
    )
    
    return(
        <>
        <nav className={ menuClasses }>
            <ul style={{ listStyle: 'none' }}>
                <li className="menu-item"><Link href="/">Work</Link></li>
                <li className="menu-item"><Link href="/">About</Link></li>
                <li className="menu-item"><Link href="/">Get in touch</Link></li>
            </ul>
        </nav>
        <span class="menu-toogle"></span>
        </>
    )
}