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

export const Button = styled.a<pageMode>`
  background: ${({mode}) => mode.background};
  color: ${({ mode }) => mode.color};
  border: none;
  border-bottom: 1px solid red;
  padding-bottom: .5rem;
  font-size: 1.2rem;
  font-weight: bolder;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  animation: padding 2s ease-in-out;

  &:focus {
    padding-bottom: .1rem;
  }
`