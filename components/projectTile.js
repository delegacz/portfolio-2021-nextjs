import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectTile({ project, count }) {
    
    function imgUrl() {
        if(project.node.project_main_image == null) {
            return  '/placeholderImage.jpg'
        } 
        else {
            return project.node.project_main_image.url
        }
    }
    return(
            <>
                <h3 className="project-title">{ project.node.project_title[0].text }</h3>
                <div className="project-tile" style={ 
                        {
                            backgroundImage: `url(${ imgUrl() })`,
                            backgroundSize: 'cover',
                            display: 'block',
                            float: count%2==0 ? 'left' : 'right',
                            backgroundPosition: 'center, center',
                            backgroundRepeat: 'no-repeat',
                            width: "90%",
                            height: "100%"
                            }
                        }> 
                </div>                 
            </>
    )
}