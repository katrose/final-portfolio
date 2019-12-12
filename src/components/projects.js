import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import githubIcon from "../images/icons_github.svg"
import worldIcon from "../images/icons_world.svg"

const ProjectWrapper = styled.section`
  margin: 0 auto;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
`
const ProjectHeading = styled.h2`
  font-size: 2.5em;
`
const ProjectTile = styled.div`
  display: grid;
  grid-template-rows: 60px 60px 1fr 1fr;
  padding: 20px;
  border: 1px solid white;
  li {
    margin-right: 5px;
    padding: 5px 5px;
  }
  .HTML {
    background-color: yellow;
    color: black;
  }
  .Jekyll {
    background-color: pink;
    color: black;
  }
  .CSS {
    background-color: rebeccapurple;
  }
  .SASS {
    background-color: royalblue;
  }
  .JavaScript {
    background-color: lightblue;
    color: black;
  }
  .Node {
    background-color: darkgreen;
  }
  .Express {
    background-color: black;
  }
  .EJS {
    background-color: magenta;
  }
  .REST {
    background-color: orangered;
  }
  .MongoDB {
    background-color: darkcyan;
  }

`
const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    padding: 5px;
  }
`
const ProjectToolList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  li {
    align-self: flex-start;
    border-radius: 10px;
  }
`
const Projects = () => {

  return (
    <section>
      <ProjectHeading>Projects</ProjectHeading>
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
          <ProjectWrapper>

            {data.allProjectsJson.nodes.map((project, index) => (
              <ProjectTile>

                <ProjectLinks>
                  <a href={project.githubURL} target="_blank">
                    <img src={githubIcon} alt="Github Logo" height="40px"/>
                  </a>

                  <a href={project.liveURL} target="_blank">
                    <img src={worldIcon} alt="Live URL" height="40px"/>
                  </a>
                </ProjectLinks>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectToolList>{project.tools.map(tool => (
                  <li className={tool}>{tool}</li>
                ))}
                </ProjectToolList>
              </ProjectTile>
            ))}
          </ProjectWrapper>
        )}
      />
    </section>
  )
}

export default Projects
