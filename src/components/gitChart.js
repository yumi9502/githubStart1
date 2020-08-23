import React from  "react"
import {Link} from "gatsby"
import { graphql } from "gatsby"
import {Doughnut} from "react-chartjs-2"

const gitCh=()=>{
  //const {repositories,} = data.githubData.data.viewer

  const language = [['C#',83],['TypeScript',32],['JavaScript',52],['CSS',41]];
  const label1=[];
  const data1=[];
  for(const [key,value] of language){
    label1.push(key);
    data1.push(value);
  }
  const data={
    labels:label1,
    datasets:[{
      backgroundColor:["#178600","#2B7489","#F1E05A","#563D7C"],
      data:data1,
    },],
  };
  const options={
    options:[{ title:[{ display:true, text:'プログラム言語' }], },],
  };
    return(
        <div
        style={{
            borderBottom: `1px solid #e1e4e8`,
            marginBottom: `1rem`,
            padding: `1rem`,
            fontSize: 16,
          }}
        >
            <nav>
        <ul>
            <li><Link to="/">top</Link></li>
            <li><Link to="/about">about</Link></li>
        </ul>
    </nav>

    <Doughnut data={data} options={options} />
        </div>
    )
}
export default gitCh

export const gitHubQuery = graphql`
  {
    githubData {
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