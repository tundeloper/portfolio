import React from 'react'
import styled from 'styled-components'
import Form from './form'
import ContactText from './contactText'

export default function Contactform({mode}: {mode:{}}) {
  return (
      <StyleContact id='contact'>
          <ContactText />
          <Form mode={mode} />
    </StyleContact>
  )
}


const StyleContact = styled.div`
    padding: 0 2rem 0 2rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;

    @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
        flex-direction: column;
        align-items: center;
    }

`