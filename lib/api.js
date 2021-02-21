import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`

export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
    accessToken: API_TOKEN,
  });

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getProjectsForHome(context) {
    const data = await fetchAPI(
        `{ 
        allProjecys {
          edges {
            node {
              project_title
              project_main_image
             _meta {
               uid
             }
            }
          }
        }
       }`,{context}

    )
    return data.allProjecys.edges
}

export async function getHeroContent(context) {
    const data = await fetchAPI(
        `{
            allHomes {
              edges {
                node {
                  hero_text
                  hero_paragraph
                  capabilities_list
                }
              }
            }
          }`,{context}
    )
    return data.allHomes.edges
}

export async function getProjectData(slug) {
  console.log('xx',slug)
  const data = await fetchAPI(
    `
    query ProjectBySlug($slug: String!) {
      projecy(uid: $slug, lang: "en-gb" ){
        project_title
        project_short_description
        responsibility_list
        project_main_image
        project_case_study
        _meta {
          uid
        }
        body{
          ... on ProjecyBodyGrouped_element {
            type 
            primary{
              grouped_element_heading
              grouped_element_content_1_2_layout
            }
            
          }
          __typename
         
        }
    }
    }`,
    {
      variables: {
        slug,
      },
    }
  )
  console.log('data from errored >>> ', data.projecy)
  console.log('cccc>>>', data.projecy)
  return data.projecy
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    {
      allProjecys {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allPosts?.edges
}