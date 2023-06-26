import React from 'react'
import styled from 'styled-components'
import { SvgCircle } from '../../assets/svgs/svgCircle'

const skill = [{name:"HTML5", experience: "3 Years Experiences"},{name:"CSS", experience: "3 Years Experiences"},{name:"Javascript", experience: "3 Years Experiences"},{name:"React", experience: "2 Years Experiences"},{name:"Next", experience: "2 Years Experiences"},{name:"Sass", experience: "3, Years Experiences"},{name:"tailwind CSS", experience: "2, Years Experiences"}]

export default function Skills() {
  return (
      <Wrapper>
          {skill.map(skill => <div key={Math.random()}>
              <h1>{skill.name}</h1>
              <h2>{skill.experience}</h2>
          </div>)}
          <div className='svg'><SvgCircle /></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 0 2rem 0 2rem;
margin-bottom: 3rem;
display: grid;
gap: 2rem;
position: relative;
grid-template-columns: min-content min-content min-content;
div {
    padding: 1rem;
    width: max-content;
}
h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.2rem;

}

.svg {
    position: absolute;
    right: 1.7rem;
    top: 4.3rem;
    animation: skill 2.3s ease-in infinite;
}
@keyframes skill {
    0% {
        transform: skew(0deg);
    }
    50% {
        transform: skew(50deg);
    }

    60% {
        transform: rotate(10deg);
        
    }

    80% {
        transform: skew(-50deg);

    }
    100% {
        transform: skew (0deg)
    }
}

@media (max-width: ${(props) => `${props.theme.screen.tab}px`}) {
    grid-template-columns: auto auto auto;
    .svg{
        display: none;
    }
}

@media (max-width: 800px) {
    grid-template-columns: auto auto ;
}

@media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    grid-template-columns: min-content;
    justify-content: center;

}
`
