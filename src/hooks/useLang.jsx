import {useStaticQuery, graphq1} from "gatsby"
  
export const useLangDara=()=>{
  const{data}=useStaticQuery(
    graphq1`
    query GithubData{
      githubApiQuery(
        sort: { fields: startDate, order: ASC }
      ){
        data {
          viewer {
            name
            avatarUrl
            isHireable
            repositories {
              nodes {
                name
                description
                homepageUrl
                resourcePath
                forkCount
                createdAt
                updatedAt
                languages {
                  totalSize
                  totalCount
                  edges {
                    size
                    node {
                      name
                      color
                    }
                  }
                }
  
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
    `
  )
  return data.data
}