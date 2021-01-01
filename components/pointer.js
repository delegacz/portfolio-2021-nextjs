import React, { Component, useState, useEffect } from 'react'
import classNames from "classnames";


export default function Pointer() {
    const [pos, setPos] = useState({x:0,y:0})
    const [hidden, setHidden] = useState(false)
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [linkHoveredOnProject, setLinkHoveredOnProject] = useState(false);

    useEffect(() => {
        addEventListener();
        handleLinkHoverEvents();
        return () => removeEventListener();
        
    },[])
    
    const resetState = () => {
        console.log('pops')
        setHidden(false)
        setClicked(false)
        setLinkHovered(false)
        setLinkHoveredOnProject(false)
    }

    const addEventListener = () => {
        document.addEventListener('mousemove',onMouseMove)
        document.addEventListener('mouseenter',onMouseEnter)
        document.addEventListener('mouseleave',onMouseLeave)
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    }

    const removeEventListener = () => {
        document.removeEventListener('mousemove',onMouseMove)
        document.removeEventListener('mouseenter',onMouseEnter)
        document.removeEventListener('mouseleave',onMouseLeave)
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    }

    const handleLinkHoverEvents = () => {

        document.querySelectorAll("div.project-tile").forEach( el => {
            el.addEventListener("mouseover", () => setLinkHoveredOnProject(true));
            el.addEventListener("mouseout", () => setLinkHoveredOnProject(false));
        }
        );

        document.querySelectorAll("a").forEach(el => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
        });

    }
    const onMouseMove = (e) => {
        setPos({x:e.clientX,y:e.clientY})
    }
    const onMouseEnter = () => {
        setHidden(false)
    }
    const onMouseLeave = () => {
        setHidden(true)
    }
    const onMouseDown = () => {
        setClicked(true);
    }
    const onMouseUp = () => {
        setClicked(false);
    }
    const pointerClasses = classNames(
        'pointer',
        {
            'pointer--clicked':clicked,
            'pointer--hidden':hidden,
            'pointer--link-hovered': linkHovered,
            'pointer--link-project--hovered': linkHoveredOnProject
        }
    )
    return (
        <div className={pointerClasses} style={{left: `${pos.x}px`, top: `${pos.y}px`}}></div>
    )
}