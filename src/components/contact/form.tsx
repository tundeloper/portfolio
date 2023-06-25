import React from 'react'
import styled from 'styled-components'
import { Button } from '../../global/container'

export default function Form({ mode }: { mode: {} }) {
    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(event)
    }

  return (
      <StyledForm mode={mode} onSubmit={formSubmit}>
          <div>
          <input type='name' placeholder='Name'/>
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message' />
          </div>
          <Button as='button' mode={mode} type='submit'>SEND MESSAGE</Button>
    </StyledForm>
  )
}

const StyledForm = styled.form<{mode:{}}>`
& > div {
    display: flex;
    flex-direction: column;
}

input {
    background-color: transparent;
    border: none;
    margin-bottom: 2rem;
    border-bottom: 1px solid gray;
    font-size: large;
    height: 2rem;
    width: 25rem;
    color: ${({mode}) => mode};

    &:focus {
        outline: none;
    }
}

textarea {
    background: transparent;
    border: none;
    margin-bottom: 2rem;
    border-bottom: 1px solid gray;
    font-size: large;
    height: 10rem;
    width: 25rem;
    color: ${({mode}) => mode};
}

@media (max-width: 800px) {
    width: 100%;
    input {
        width: 100%;
    }
    textarea {
        width: 100%;
    }
}


@media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    
}

`
