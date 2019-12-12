import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Projects = () => {

  return (
    <section>
      <StaticQuery
        query={graphql`
          query MyQuery {
            allProjectsJson {
              nodes {
                title
                description
                githubURL
                liveURL
                tools
              }
            }
          }
        `}
        render={data => (
          <div>
            {data.allProjectsJson.nodes.map((project, index) => (
              <h3>{project.title}</h3>
            ))}
          </div>
        )}
      />
    </section>
  )
}

export default Projects