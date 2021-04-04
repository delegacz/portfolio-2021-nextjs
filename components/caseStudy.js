import React, { Component} from 'react'
import {Grid} from '@material-ui/core'
import { sizing, maxWidth } from '@material-ui/system';

export default function CaseStudy({ items }) { 
    return( 
           <>
           {
            items.map(item => {
                   switch(item.type)  {
                    case 'section_heading':
                        return (<SectionHeadingSlice item={item}/>)
                    case 'media':
                        return(<MediaSlice item={item}/>)
                    case 'subsection_with_heading':
                        return(<SubSectionSlice item={item}/>)
                    case 'image_grid':
                        return(<ImageGridSlice item={item}/>) 
                    default:
                        return(<h1>PLACEHOLDER</h1>)
                }
               })
           }
           </>
        )
        
        
}

const maxWidthStyle =  { 
    maxWidth: "1440px", 
    margin: "0 auto" 
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
        <Grid container style={maxWidthStyle}>
            <Grid item xs={12}>
                <h1 className="case-study-section-heading">{item.primary.section_heading[0].text}</h1>
            </Grid>
        </Grid>
    )
}

const SubSectionSlice = ({item}) => {
    return (
        <Grid container gap={2} style={maxWidthStyle}>
            <Grid item xs={12} md={4}>
                <h2 className="case-study-sub-section-heading">{item.primary.subsection_heading[0].text}</h2>
            </Grid>
            <Grid item xs={12} md={8}>
                <p className="case-study-sub-section-paragraph">{item.primary.subsection_content[0].text}</p>
            </Grid>
        </Grid>
    )
}
const ImageGridSlice = ({item}) => {
    return(
        <Grid container style={maxWidthStyle}>
            <Grid item xs={12}>
                <h2>{item.primary.image_grid_heading[0].text}</h2>
            </Grid>  
            <Grid container gap={2}>
                {
                    item.fields.map(i => {
                        return(<Grid item xs={12} md={6}>
                            <img width="100%" src={i.image_grid_item.url} alt={i.image_grid_item.url}/>
                        </Grid>)
                    })
                }
            </Grid> 
        </Grid>     
    )
}
