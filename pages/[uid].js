import { useRouter } from 'next/router'
import { getProjectData } from '../lib/api'
import { getAllProjectsWithSlug } from '../lib/api'

export default function Project({ content }) {
    const router = useRouter()
    console.log(content)
    return(
        <>
        <h1>{content.projecy.project_title[0].text}</h1>
        <p>{content.projecy.project_short_description[0].text}</p>
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