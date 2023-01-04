import { useEffect } from 'react'
import Link from 'next/link';

const Dark = () => {
  useEffect(() => {
    const LIGHT_COLOR = '#dfdfdf'
    const DARK_COLOR = '#424241'

    document.body.style.backgroundColor = DARK_COLOR

    return () => {
      document.body.style.backgroundColor = LIGHT_COLOR
    }
  }, [])

  return <div style={{color: 'wheat'}}>
      This page should have a dark background

      <br />
      <Link href="/">Go to back home!</Link>
    </div>
}

export default Dark