import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectTile({ project, cname }) {
    
    function imgUrl() {
        if(project.node.project_main_image == null) {
            return  '/placeholderImage.jpg'
        } 
        else {
            return project.node.project_main_image.url
        }
    }

    return(
        <Link href={ project.node._meta.uid }>
            <div className={ cname }>
                <div 
                style={ 
                    {
                        backgroundImage: `url(${ imgUrl() })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center, center',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        height: "100%"
                        }
                    }> 
                </div>
                <h3>{ project.node.project_title[0].text }</h3>
            </div>
        </Link>
    )
}