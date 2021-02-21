import React, { Component} from 'react'


export default function Heading({content, type}) {
    switch (type) {
        case 'heading1':
            return <h1>{content}</h1>
            break;
        case 'heading2':
            return <h2>{content}</h2>
            break;
        case 'heading3':
            return <h3>{content}</h3>
            break;
        case 'heading4':
            return <h4>{content}</h4>
            break;
        case 'heading5':
            return <h5>{content}</h5>
            break;
        case 'heading6':
            return <h6>{content}</h6>
            break;
        default:
            return <h1>{content}</h1>
            break;
    }
}