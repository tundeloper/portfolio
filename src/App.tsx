import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './global/theme'
import { DivContainer } from './global/container';
import Header from './components/Header';
import Profile from './components/profile';
import Skills from './components/skills';
import Project from './components/Project';
import Contactform from './components/contact';
import Footer from './components/footer';



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
      <Project mode={mode} />
      <Contactform mode={mode} />
      <Footer />
    </DivContainer>
  </ThemeProvider>
}




export default App;
