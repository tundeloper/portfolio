import React from 'react'
import styled from 'styled-components'
const skill = [{name:"HTML5", experience: "3 Years Experiences"},{name:"CSS", experience: "3 Years Experiences"},{name:"Javascript", experience: "3 Years Experiences"},{name:"React", experience: "2 Years Experiences"},{name:"Next", experience: "2 Years Experiences"},{name:"Sass", experience: "3, Years Experiences"}]

export default function Skills() {
  return (
      <Wrapper>
          {skill.map(skill => <div>
              <h1>{skill.name}</h1>
              <h2>{skill.experience}</h2>
          </div>)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: grid;
gap: 2rem;
position: relative;
grid-template-columns: min-content min-content min-content;
div {
    padding: 2rem;
    width: max-content;
}
h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
`
