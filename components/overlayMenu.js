import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import {Link} from 'next/link'
import { render } from 'react-dom'
export default function OverlayMenu(props) {
    
    const menuItems = [
        {
            name: 'Work',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
    ]

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
        <Menu menuItems={ menuItems } />
        <CloseButton changeVisibility={props.changeVisibility}/>
       </section>
    )
}

const Menu = ({ menuItems }) => {
    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%'
    }

    return(
        <ul style={menuStyle}>
            {
                menuItems.map(item => {
                    return(
                        <MenuItem item={item}/>
                    )
                })
            }
        </ul>
    )
}

const MenuItem = ({ item }) => {
    return (
       <li>
            <a href={item.url}>
                {item.name}
            </a>
        </li>
    )
}

const CloseButton = (props) => {
    return(
        <button class="overlay-menu-exit" onClick={props.changeVisibility}>x</button>
    )
}