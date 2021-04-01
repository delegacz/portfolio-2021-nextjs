import React, { Component} from 'react'
import {Grid} from '@material-ui/core'
import Heading from '../components/heading'

export default function CaseStudy({items}) {
    //TODO Create Components for each type of slice, as returned with GraphQL
        items.map(item => {
            console.log('item =>', item)
        })
    
    return(<></>)
}