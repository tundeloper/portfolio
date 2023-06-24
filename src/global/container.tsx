import styled from "styled-components";

interface pageMode {
    mode: {
        background?: string,
        color?: string
    }
}

export const DivContainer = styled.div<pageMode>`
padding: 0 4rem 0 4rem;
background: ${({mode}) => mode.background};
color: ${({mode}) => mode.color};

@media (max-width: ${(props) => `${props.theme.screen.tab}px`}) {
    padding: 0;
  }
`;

export const Button = styled.button<pageMode>`
  background: ${({mode}) => mode.background};
  color: ${({ mode }) => mode.color};
  border: none;
  border-bottom: 1px solid red;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;

`

// export const H2 = styled.h2`
//     font-size: 1.2rem;
//     margin-bottom: 1.5rem;
// `
// export const H3 = styled.h2`
//     font-size: 4rem;
//     margin-top: .1rem;
//     margin-bottom: 0;
// `

// export const Card = styled.div<{color?: string}>`
//     display: flex;
//     justify-content: space-between;
//     border-radius: .5rem;
//     padding: 1rem;
//     background-color: ${props => props.color}; 

//     div {
//         display: flex;
//         gap: .5rem;
//     }
// `

// export const Button = styled.button`
//     width: 100%;
//     border-radius: 2rem;
//     padding: .7rem .5rem;
//     background: rgb(57 32 101);
//     color: white;
//     font-weight: bolder;
//     border: none;
//     cursor: pointer;
// `