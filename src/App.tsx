import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './global/theme'
import { DivContainer } from './global/container';
import Header from './components/Header';
// import { Svg1 } from './assets/svgs/svgcomp';
import Profile from './components/profile';
import Skills from './components/skills';



function App() {
  const [mode, setMode] = useState(theme.mode.dark)
  const modeHandler = () => {
    if (mode.background === 'black') {
      setMode(theme.mode.light)
    } else {
      setMode(theme.mode.dark)
    }
  }

  return <ThemeProvider theme={theme}>
    <DivContainer mode={mode}>
      <Header mode={mode} onclick={modeHandler} />
      <Profile mode={mode} />
      <Skills />
    </DivContainer>
  </ThemeProvider>
}




export default App;
