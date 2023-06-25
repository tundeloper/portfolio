import React from 'react'
import styled from 'styled-components'
import { Githubsvg } from '../../assets/svgs/Githubsvg'
import { LinkedInsvg } from '../../assets/svgs/linkedin-3'
import { Twittersvg } from '../../assets/svgs/twitter-3'
import {Mode} from './mode'
import HashnodeSvg from '../../assets/svgs/hashNode'

interface props {
  mode: {
    background: string,
    color: string
  },
  onclick?: () => void,
}



const Header: React.FC<props> = (props) => {
  return (
    <Head>
      <h1>Tundeloper</h1>
      <Links mode={props.mode}>
        <Githubsvg />
        <LinkedInsvg />
        <Twittersvg />
        <div className='mode-item'>
          <HashnodeSvg />
          <a href='https://tundeloper.hashnode.dev/' >Blog</a>
          <div onClick={props.onclick}>
            <Mode mode ={props.mode} />
          </div>
          </div>
        </Links>
    </Head>
  )
}

export default Header

const Links = styled.div<{mode:{color: string}}>`
  display: flex;
  height: 2rem;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: gray;

  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${(props) => props.mode.color}
  }
`

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  /* background: green; */

  .mode-item {
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
  }

  @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    h1 {
      display: none;
    }
  }
`