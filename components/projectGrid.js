import React, { Component } from 'react'
import ProjectTile from './projectTile'
import SectionNumber from './sectionnumber'

export default function ProjectGrid({ projects }) {
    let count = 1;
    return(
    <section className="project-grid">
        <div className="section-header">
            <h3 className="section-title">Work</h3>
            <SectionNumber number={'01'}/>
        </div>
        <div className="project-items">
        { 
        
        projects.map((p,count) => {
            count++
            let addedClass = ((count === 3) ? 'project-thumbnail-small' : 'project-thumbnail-normal')
            return (<ProjectTile key={ count } cname={ addedClass } project={p}/>) 
        })
        }
        </div>
    </section>
    )
}

