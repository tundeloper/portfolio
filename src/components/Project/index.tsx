import React from 'react'
import styled from 'styled-components'
import { Button } from '../../global/container'
import { projectList } from './projecrList'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Project({mode}: {mode: {}}) {
  return (
      <StyledProject id='project'>
          <div className='title'>
              <h1>Project</h1>
              <Button href='#contact' mode={mode}>Contact me</Button>
          </div>
          <div className='grid'>
              {projectList.map((list) => <div key={Math.random()}>
                  <LazyLoadImage src={list.img} delayTime={5000} placeholderSrc="project" effect='blur'/>
                  <div>{list.name}</div>
                  <div>{list.technologyUsed}</div>
                  <div className='project'>
                      <Button as='a' href={list.projetLink} mode={mode}>view project</Button>
                      <Button  href={list.projectCode} mode={mode}>project code</Button>
                  </div>
              </div>)}
          </div>
    </StyledProject>
  )
}

const StyledProject = styled.div`
    padding: 0 2rem 0 2rem;
    padding-bottom: 4rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid red;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        h1 {
            font-size: 3.3rem;
        }
    }
    .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 2rem;

    & > div {
        box-shadow: 1rem 1rem .5rem 1px rgba(0, 0, 0, 0.096);
        text-transform: uppercase;

        div {
            margin-bottom: .3rem;
            font-size: 1rem;
            font-weight: bold;
            line-height: 2rem;
        }
    }

    img {
        height: 13rem;
        /* box-shadow: 1rem 1rem .5rem 1px rgba(0, 0, 0, 0.096); */

    }
}

.project {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
}

@media (max-width: ${(props) => `${props.theme.screen.tab}px`}) {
    .title {
        h1 {
            font-size: 2.5rem;
        }
    }
}

@media (max-width: 1000px) {
    .grid {
    grid-template-columns: auto auto;
    gap: 2rem;
    }
}

@media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    /* padding: 1rem; */
    .grid {
    grid-template-columns: auto;
    gap: 2rem;
    }
}
`