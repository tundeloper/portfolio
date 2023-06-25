import React from 'react'
import styled from 'styled-components'
import { SvgCircle } from '../../assets/svgs/svgCircle'

export default function ContactText() {
  return (
      <TextForm>
          <div>
          <h1>Contact</h1>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
          </div>
          <SvgCircle />
    </TextForm>
  )
}

const TextForm = styled.div`
h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
}
p {
    width: 25rem;
    font-size: 1.5rem;
    margin-bottom: 2rem
}

@media (max-width: ${(props) => `${props.theme.screen.tab}px`}) {
    h1 {
        font-size: 2.5rem
    }
}

@media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    h1 {
        margin-top: 2rem;
        text-align: center;
        
    }
    p {
        width: 100%;
        font-size: 1.2rem;
    }
}
`