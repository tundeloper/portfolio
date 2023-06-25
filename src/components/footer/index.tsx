import React from 'react'
import styled from 'styled-components'
import { Githubsvg } from '../../assets/svgs/Githubsvg'
import { LinkedInsvg } from '../../assets/svgs/linkedin-3'
import { Twittersvg } from '../../assets/svgs/twitter-3'

export default function Footer() {
  return (
    <StyledFooter>
      <div><h2>tundeloper</h2></div>
      <div className='footerNav'>
        <Githubsvg />
        <LinkedInsvg />
        <Twittersvg />
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  padding: 3rem 2rem 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: gray;


  .footerNav {
    display: flex;
    gap: 2rem;
  }


  @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    padding: 2rem;

  }

  .footerNav {
    gap: 1rem;
  }
`