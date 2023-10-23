import { useReducer } from 'react'

const Counter = () => {
  // 2. 은행(useReducer)은 고객의 요구사항의 타입에 맞는 서비스를 제공하기 위해 회계 직원(countReducer)를 통해 업무 처리
  const countReducer = (oldState, action) => {
    if (action === 'DOWN') {
      return oldState - 1
    } else if (action === 'RESET') {
      return (oldState = 0)
    } else if (action === 'UP') {
      return oldState + 1
    }
  }
  // 3. countReducer가 반환한 새로운 상태는 count 변수에 의해 나타내어지고, 화면에 렌더링
  const [count, countDispatch] = useReducer(countReducer, 0)

  // 1. 은행(useReducer)에서 고객(이벤트(down, reset, up))은 창구직원(countDispatch)에게 요구사항을 전달
  const down = () => {
    countDispatch('DOWN')
  }

  const reset = () => {
    countDispatch('RESET')
  }

  const up = () => {
    countDispatch('UP')
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
