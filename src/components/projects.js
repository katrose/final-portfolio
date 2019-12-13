import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import SVGIcon from "./svg"
import Fade from "react-reveal/Fade"

// Global component CSS variables
const backgroundColor = '#f4f3ef'
const textColor = '#66615b'

// Component styles
const ProjectWrapper = styled.section`
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 100px;
  padding-left: 50px;
  background-color: ${backgroundColor};
  color: ${textColor};
`
const ProjectHeading = styled.h2`
  margin-bottom: 30px;
  font-size: 2.5em;
`
const TileWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 100px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ProjectTile = styled.div`
  display: grid;
  grid-template-rows: 50px 50px 2fr 1fr;
  padding: 20px;
  border: 1px solid ${textColor};
  h3 {
    font-size: 1.6em;
  }
  li {
    margin-right: 5px;
    padding: 5px 5px;
    color: white;
  }
  .HTML {
    background-color: orangered;
  }
  .Jekyll {
    background-color: crimson;
  }
  .CSS {
    background-color: royalblue;
  }
  .SASS {
    background-color: deeppink;
  }
  .JavaScript {
    background-color: gold;
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
    background-color: purple;
  }
  .MongoDB {
    background-color: darkcyan;
  }
`
const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
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
    <ProjectWrapper>
      <Fade bottom>
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
            <TileWrapper>
              {data.allProjectsJson.nodes.map((project, index) => (
                <ProjectTile>
                  <ProjectLinks>
                    <a href={project.githubURL} target="_blank">
                      <SVGIcon
                        name="github"
                        width={35}
                      />
                    </a>
                    <a href={project.liveURL} target="_blank">
                      <SVGIcon
                        name="link"
                        width={35}
                      />
                    </a>
                  </ProjectLinks>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ProjectToolList>
                    {project.tools.map(tool => (
                      <li className={tool}>{tool}</li>
                    ))}
                  </ProjectToolList>
                </ProjectTile>
              ))}
            </TileWrapper>
          )}
        />
      </Fade>
    </ProjectWrapper>
  )
}

export default Projects
