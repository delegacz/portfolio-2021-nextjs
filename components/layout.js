import React, { Component } from 'react'
import Footer from './footer'

export default function Layout({ children }) {
    return(
        <>
            { children }
            <Footer/>
        </>
    )
}

