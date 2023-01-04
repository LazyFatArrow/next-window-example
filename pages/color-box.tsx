import { CSSProperties, useEffect, useState } from 'react'

const ColorBox = () => {
  const COLOR_CHANGE_BREAKPOINT_IN_PX = 800
  const LIGHT_COLOR = '#dfdfdf'
  const DARK_COLOR = '#424241'

  const [backgroundColor, setBackgroundColor] = useState(LIGHT_COLOR)

  const changeColor = () => {
    if (window.innerWidth > COLOR_CHANGE_BREAKPOINT_IN_PX) {
      setBackgroundColor(LIGHT_COLOR)
    } else {
      setBackgroundColor(DARK_COLOR)
    }
  }

useEffect(() => {
  const onResize = () => changeColor()

  window.addEventListener('resize', onResize)

  return () => {
    window.removeEventListener('resize', onResize)
  }
}, [])

  useEffect(() => {
    changeColor()
  }, [])

  const baseStyle: CSSProperties = {
    width: '100%',
    height: '100vh',
  }

  return <div style={{
    ...baseStyle,
    backgroundColor
  }} />
}

export default ColorBox