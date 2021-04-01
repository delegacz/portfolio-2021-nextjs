import React, { Component } from 'react'
import ProjectTile from './projectTile'
import SectionNumber from './sectionnumber'
import { Grid } from '@material-ui/core'
import Link from 'next/link'
export default function ProjectGrid({ projects }) {
    
    return(
    <section className="project-grid">
        <div className="section-header" style={{position: 'relative'}}>
            <h3 className="section-title">Work</h3>
            <SectionNumber number={'01'}/>
        </div>
        <Grid  container spacing={2} className="project-items">
            {
            
              projects.map((p,c) => {
                    c++
                    return (
                        <Link href={ p.node._meta.uid }>
                            <Grid item xs={12} className={c%2==0 ? 'project_even' :'project_odd'}>  
                                    <ProjectTile key={ p.id } project={p} count={c}/>
                            </Grid>
                        </Link>
                    )})
            }
        </Grid>
    </section>
    )
}

