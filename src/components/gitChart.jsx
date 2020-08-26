import React from  "react" //{useState,useEffect} 
import {useStaticQuery,graphql} from "gatsby"
//import {Link} from "gatsby"
import {Doughnut} from "react-chartjs-2"

const LangData=()=>{
  const tempData= useStaticQuery(graphql`
  query GitData{
    githubData {
      data{
        viewer {
          name
          avatarUrl
          isHireable
          resourcePath
          repositories {
            totalCount
            nodes {
              name
              description
              homepageUrl
              forkCount
              createdAt
              updatedAt
              resourcePath
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
  `)
  // リポジトリのtotalCountを取得してリポジトリごとの言語の名前とバイト数を取得する
const totalRepo=tempData.githubData.data.viewer.repositories.totalCount
const langName1=[]
const langSize1=[]
for(let i=0;i<totalRepo;i++){
  let langEachRepo=tempData.githubData.data.viewer.repositories.nodes[i].languages.totalCount
  for(let j=0;j<langEachRepo;j++){
    langName1.push(tempData.githubData.data.viewer.repositories.nodes[i].languages.edges[j].node.name)
    langSize1.push(tempData.githubData.data.viewer.repositories.nodes[i].languages.edges[j].size)
  }
}
console.log(langName1);
console.log(langSize1);
// 言語の名前とバイト数をプロパティの組で[key,value]からなる配列にする
var langSet = [];
for(var i=0;i<langSize1.length;i++){

  langSet.push([langName1[i],langSize1[i]]);
  
}
console.log(langSet);
// 言語の名前ごとの合計を出す
var sum={};
for(var i=0;i<langSet.length;i++){
  var key=langSet[i][0];     // i++されるたび変数keyにlangSet[i]のキーを入れて
  if(key in sum){            // sumのキーに変数keyと同じキーが存在するかチェック
    sum[key]+=langSet[i][1]; // 存在するときは同じキーごとにlangSet[i]の値を足す
  }else{
    sum[key]=langSet[i][1];  //存在しないときはキーに値を入れる
  }
}
console.log(sum);
delete sum['Mask']
delete sum['HLSL']
delete sum['Mathematica']
delete sum['ShaderLab']

const label1=[];
const data1=[];
for(var key in sum){
  label1.push(key);
  data1.push(sum[key])
}
console.log(label1);
console.log(data1);
  const data={
    labels:label1,
    datasets:[{
      backgroundColor:["#178600","#2B7489","#e34c26","#563D7C","#f1e05a"],
      data:data1,
    },],
  };
return(
  <Doughnut data={data} />
)
}

 /*const gitCh=()=>{

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
    return
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
    
}*/
export default LangData 
//gitCh
