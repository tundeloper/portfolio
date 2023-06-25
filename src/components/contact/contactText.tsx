import React from 'react'
import styled from 'styled-components'
import { SvgCircle } from '../../assets/svgs/svgCircle'

export default function ContactText() {
  return (
      <TextForm>
          <h1>Contact</h1>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
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
`