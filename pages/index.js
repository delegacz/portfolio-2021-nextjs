import Hero from '../components/hero'
import ProjectGrid from '../components/projectGrid'
import { getProjectsForHome } from '../lib/api'
import { getHeroContent } from '../lib/api'

export default function Home(props) {
  const heroContent = props.hero[0].node
  const projects = props.projects
  return (
    <div className="container">
      <Hero heroContent={heroContent}/>
      <ProjectGrid projects={projects}/>
    </div>
)}

export async function getStaticProps(context) {
  const projects = await getProjectsForHome()
  const hero = await getHeroContent()
  return {
      props: {
          projects,
          hero,
      } 
  }
}