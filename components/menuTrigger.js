import React, { Component, useState, useEffect } from 'react';


export default function MenuTrigger(props) {    
        useEffect(() => {
            handleMenuClick();
        },[])
      
      const handleMenuClick = () => {
        const el = document.querySelectorAll('.menu-toogle')
        el.forEach(e => {
            e.addEventListener('click', changeActive);
        })
      }
      
      function changeActive() {
          props.changeVisibility()
      }
    
    return (<span class="menu-toogle"></span>)
}