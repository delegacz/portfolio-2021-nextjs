import { useRouter } from 'next/router'
import { getProjectData } from '../lib/api'
import { getAllProjectsWithSlug } from '../lib/api'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import CaseStudy from '../components/caseStudy'
export default function Project({ content }) {
    const router = useRouter()
    console.log('content =>', content)
    //In content getting the following props
    // project_title
    // project_main_image
    // project_short_description
    // project_title
    // responsibility_list
    // _meta
    if(content === undefined) {
        return(
            <>Loading...</>
        )
    }
    else {
        return (
            <>
            <ProjectHeader content={content}/>
            <CaseStudy items={content.body}/>
            </>
        )
    }   
}
const maxWidthStyle =  { 
    maxWidth: "1440px", 
    margin: "0 auto",
}

const ProjectHeader = ({ content }) => {
        return(
        <>
            <Grid container alignItems="flex-end" style={{  
                                                            maxWidth: "1440px", 
                                                            margin: "0 auto",
                                                            minHeight: "400px"
                                                            }}>
                <Grid item sm={12}>
                    <h1>{content.project_title[0].text}</h1>
                </Grid>
            </Grid>
            <Grid container space={2} style={maxWidthStyle}>
                <Grid item sm={8}>
                    <p>{content.project_short_description[0].text}</p>
                </Grid>
                <Grid item sm={4}>
                     
                        <h3>Responsible for:</h3>{
                        content.responsibility_list.map(item => {
                           {
                               return (
                                    <div>{item.text}</div>
                               )
                            }
                        })
                    }
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{backgroundImage:`url(${content.project_main_image.url})`, backgroundPosition:"center, center", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"300px"}}></Grid>
            </Grid>
        </>     
    )
}

export async function getStaticProps(params) {
    const content = await getProjectData(params.params.uid)
    return {
        props: {
           content,
        } 
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsWithSlug()
    return {
      paths: allProjects?.map(({ node }) => `${node._meta.uid}`) || [],
      fallback: true,
    }
  }