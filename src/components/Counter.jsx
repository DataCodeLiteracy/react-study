import { useReducer, useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)

  // 2. 은행(useReducer)은 고객의 요구사항의 타입에 맞는 서비스를 제공하기 위해 회계 직원(countReducer)를 통해 업무 처리
  const countReducer = (oldState, action) => {
    if (action.type === 'DOWN') {
      // reducer는 순수함수여야 하기 때문에 oldState - number 처럼 number를 reducer 함수 내부에서 변경해서 외부에 영향을 받도록 작성할 수 없다.
      return oldState - Number(action.number)
    } else if (action.type === 'RESET') {
      return (oldState = 0)
    } else if (action.type === 'UP') {
      return oldState + Number(action.number)
    }
  }

  // 3. countReducer가 반환한 새로운 상태는 count 변수에 의해 나타내어지고, 화면에 렌더링
  const [count, countDispatch] = useReducer(countReducer, 0)

  // 1. 은행(useReducer)에서 고객(이벤트(down, reset, up))은 창구직원(countDispatch)에게 요구사항을 전달
  const down = () => {
    countDispatch({ type: 'DOWN', number: number })
  }

  const reset = () => {
    countDispatch({ type: 'RESET' })
  }

  const up = () => {
    countDispatch({ type: 'UP', number: number })
  }

  const handleNumber = (e) => {
    setNumber(e.target.value)
  }

  return (
    <>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="text" value={number} onChange={handleNumber} />
      <span>{count}</span>
    </>
  )
}

export default Counter
