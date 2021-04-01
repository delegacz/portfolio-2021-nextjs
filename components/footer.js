import React, { Component } from 'react'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import SectionNumber from './sectionnumber'

export default function Footer() {
    const socialMediaLinks = [
        {name: 'Dribbble', link: '#'},
        {name: 'Twitter', link: '#'},
        {name: 'Instagram', link: '#'}
    ]
    return(
        <Grid className="footer container" container direction="row">
            <Grid item xs={12} md={8}>
                <h2>Get in touch</h2>
                <h6>EMAIL</h6>
                <a className="ex-link" href="mailto:hello@delegacz.com">hello@delegacz.com</a>
            </Grid>
            <Grid style={{position: 'relative'}} item xs={12} md={4}>
                <SocialLinks socials={socialMediaLinks}/>
                <SectionNumber number={'02'}/>
            </Grid>
            <Grid className="copyright" item xs={12}>
               2021 © - All Rights Reserved - Mateusz Delegacz
            </Grid>
        </Grid>
    )
}

const SocialLinks = ({socials}) => {
    return(
        <>
        <h6>SOCIALS</h6>
        <ul className="social-list">
            {
                socials.map(s => {
                    return(
                        <li className="social-link ex-link" key={s.id}><a href={s.link}>{s.name}</a></li>
                    )
                })
            }
        </ul>
        </>
    )
}