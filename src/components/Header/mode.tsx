import React from 'react'
import { Light } from '../../assets/svgs/light'
import { Dark } from '../../assets/svgs/dark'

export const Mode:React.FC<{mode:{background: string}}> = ({mode}) => {
    if (mode.background === "black") {
      return <Dark />
    } else {
      return <Light />
  }
}
