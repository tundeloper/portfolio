import React from "react";
import styled from "styled-components";
import { Svg1 } from "../../assets/svgs/svgcomp";
import tunde from '../../assets/images/tunde.png'
import { Button } from "../../global/container";
import { LazyLoadImage } from "react-lazy-load-image-component";

// interface pageMode {
//   mode: {
//       background?: string,
//       color?: string
//   }
// }

export default function Profile({mode}) {
  return (
    <ProfileContaner>
      <div className="profilesvg"><Svg1 /></div>
      <div className="proile">
        <h1 className="left">Nice to meet you!</h1>
        <h1 className="right">I'm Babatunde Isiaka</h1>
        <p className="bio">I'm a frontend developer, passionate about building web and mobile applications that users love, Based in Lagos, Nigeria.</p>
        <Button as="a" href="#contact" mode={mode}>Conatact me</Button>
      </div>
      <div className="profieImg">
        {/* <img className="img" src={tunde} alt="tundeloper" /> */}
        <LazyLoadImage className="img" src={tunde} alt="tundeloper"/>
      </div>
    </ProfileContaner>
  )
}

const ProfileContaner = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  padding-bottom: 4rem !important;
  margin-bottom: 3rem;
  border-bottom: 1px solid red;
  
  h1 {
    font-size: 5rem;
  }
  .right {
    animation: right 2s ease-in-out ;

    @keyframes right {
      0%{
      transform: translate(20rem);
    }
    50%{
      transform: translate(10rem);
    }

    80% {
      transform: translate(-2rem);
    }

    100% {
      transform: translate(0);
    }
    }
  }

  .left {
    animation: left 2s ease-in-out ;

    @keyframes left {
      0%{
      transform: translate(-20rem);
    }
    50%{
      transform: translate(-10rem);
    }

    80% {
      transform: translate(2rem);
    }

    100% {
      transform: translate(0);
    }
    }
  }


.profilesvg {
  animation: animation 2s ease-in-out 2s infinite;
  width: min-content;
  position: absolute;
  left: -5rem;

  @keyframes animation {
    0%{
      transform: rotate(0);
    }
    50%{
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(0);
    }
  }
}

.bio {
  margin-top: 6rem;
  width: 30rem;
  line-height: 2rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.profieImg {
  /* width: 100%; */
  height: max-content;
  background: gray;
  overflow: hidden;
}

.img {
    /* height: 25rem; */
    width: 25rem;
}

@media (max-width: ${(props) => `${props.theme.screen.tab}px`}) {
    padding: 1rem;

  h1 {
    font-size: 3rem;
  }
  .bio {
  margin-top: 2rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  width: 20rem;
}
  .img {
    width: 20rem;
  }
  
  }
    


  @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    padding: .5rem;
    flex-direction: column-reverse;

    .profilesvg {
      display: none;
    }

  h1 {
    font-size: 2rem;
    margin-top: 1rem;
    text-align: center;
  }

  .bio {
  width: auto;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

  .img {
    width: 15rem;
  }
  .profieImg{
    text-align: center;
  }
  }
`
