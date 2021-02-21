import React, { Component } from 'react'
import ProjectTile from './projectTile'
import SectionNumber from './sectionnumber'
import { Grid } from '@material-ui/core'
export default function ProjectGrid({ projects }) {
    
    return(
    <section className="project-grid">
        <div className="section-header">
            <h3 className="section-title">Work</h3>
            <SectionNumber number={'01'}/>
        </div>
        <Grid  container spacing={2} className="project-items">
              {
                
              projects.map((p, count) => {
                    
                  console.log(p, count)
                  if(count == 0) { 
                    count++
                    console.log(count)
                    return (
                        <Grid item xs={12} md={8}>
                            <ProjectTile key={ count } project={p} cname={ 'project-tile-case-1' }/>
                        </Grid>
                    )}
                    else if(count == 1) {
                        count++
                        console.log(count)
                        return (
                            <Grid item xs={12} md={4}>
                                <ProjectTile key={ count } project={p} cname={ 'project-tile-case-2' } />
                            </Grid>
                        )
                    }
                    else{
                        count++
                        console.log(count)
                        return (
                            <Grid item xs={12} md={6}>
                                <ProjectTile key={ count } project={p} cname={ 'project-tile-case-3' }/>
                            </Grid>
                        )
                    }
                    
                    
              })}
        </Grid>
    </section>
    )
}

