import React, { Component} from 'react'
import {Grid} from '@material-ui/core'
import Heading from '../components/heading'

export default function CaseStudy({casestudy, slices}) {
    console.log(casestudy)

    return(
      <>  
        <Grid container>
            {
                casestudy.map(el => {
                    switch(el.type) {
                        case 'paragraph':
                            return <CaseStudyParagrapth content={el.text} />
                            break;
                        case 'image':
                            return <CaseStudyImage url={el.url} alt={el.alt}/>
                            break;
                        case 'heading1' || 'heading2' || 'heading3' || 'heading4' || 'heading5' || 'heading6':
                            return <CaseStudyHeading type={el.type} text={el.text}/>
                            break;
                        default:
                            return <></>
                            break;
                    }
            })}</Grid>
        <Grid container>
                <SliceGroupedElement slice={ slice } />
        </Grid>
    </>
    
  ) 
}


const CaseStudyParagrapth = ({content}) => {
    return(
        <Grid item xs={12}>
            { content }
        </Grid>
    )
}
const CaseStudyImage = ({url, alt}) => {
    return(
        <Grid item xs={12}>
            <img src={`${url}`} alt={alt} width="50%" height="400px"/>
        </Grid>
    )
}
const CaseStudyHeading = ({type, text}) => {
    return (
        <Grid item xs={12}>
            <h1>{text} + {type}</h1>
        </Grid>
        )
}

const SliceGroupedElement = ({slices}) => {
    slices.map(slice => {
        let headingContent = slice.primary.grouped_element_heading[0].text
        let headingType = slice.primary.grouped_element_heading[0].type

        return(
            <>
            <Heading content={headingContent} type={headingType}/>
            <Grid container>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}></Grid>
            </Grid>
            </>
        )

    })
}