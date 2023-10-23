import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const down = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const up = () => {
    setCount(count + 1)
  }

  return (
    <>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <span>{count}</span>
    </>
  )
}

export default Counter
