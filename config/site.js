module.exports = {
  title: `Gatsby Starter Github API`,
  description: `Kick off your next, great Gatsby project with this Github source starter.`,
  author: `@lundgren2`,
  siteUrl: `https://gatsby-starter-github-api.netlify.com`,
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 9, orderBy: { field: SIZE, direction:ASC } ) {
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
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
}
