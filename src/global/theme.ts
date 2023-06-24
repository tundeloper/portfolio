import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    screen : {
      phone: number,
      tab: number
    }

    mode: {
      light: {
        background: string,
        color: string
      },
      dark: {
        background: string,
        color: string
      }

    }

    color: {
      primaryColor: string,
      secondaryColor: string
      darkColor: string,
      whiteColor: string,
    },
  }
}

export const theme: DefaultTheme = {
    color: {
      primaryColor: "darkGrey",
      secondaryColor: "#FBBA12",
      darkColor: "#0F0F0F",
      whiteColor: "#D9D9D9",
    },
    
    screen: {
      phone: 576,
      tab: 1200
    },
    
    mode: {
      light: {
        background: 'white',
        color: 'black',
      },
      dark: {
        background: 'black',
        color: 'white',
      }

    }
  };