import React, { Component} from 'react'
import {Grid} from '@material-ui/core'
import Heading from '../components/heading'


export default function CaseStudy({ items }) { 
    return( 
           <div className="container">
           {
            items.map(item => {
                   switch(item.type)  {
                    case 'section_heading':
                        return (<SectionHeadingSlice item={item}/>)
                    case 'media':
                        return(<MediaSlice item={item}/>)
                    case 'subsection_with_heading':
                        return(<SubSectionSlice item={item}/>)
                    default:
                        return(<h1>PLACEHOLDER</h1>)
                }
               })
           }
           </div>
        )
        
        
}



const MediaSlice = ({item}) => {
    return(
        <Grid item xs={12}>
            <img src={item.primary.media.url} alt={item.primary.media.alt}/>
        </Grid>
    )
}

const SectionHeadingSlice = ({item}) => {
    return (
        <Grid item xs={12}>
            <h1 className="case-study-section-heading">{item.primary.section_heading[0].text}</h1>
        </Grid>
    )
}

const SubSectionSlice = ({item}) => {
    return (
        <>
            <Grid item xs={12} md={4}>
                <h2 className="case-study-sub-section-heading">{item.primary.subsection_heading[0].text}</h2>
            </Grid>
            <Grid item xs={12} md={8}>
                <p className="case-study-sub-section-paragraph">{item.primary.subsection_content[0].text}</p>
            </Grid>
        </>
    )
}

