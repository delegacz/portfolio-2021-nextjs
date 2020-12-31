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
            <div className="project-tile">
                
                <div className={cname} 
                style={ 
                    {
                        backgroundImage: `url(${ imgUrl() })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center, center',
                        backgroundRepeat: 'no-repeat',
                        }
                    }> 
                </div>
                
                <h3>{ project.node.project_title[0].text }</h3>
            </div>
        </Link>
    )
}