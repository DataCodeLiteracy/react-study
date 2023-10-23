import './App.css'
import { useRef } from 'react'
import MyInput from './components/MyInput'

function App() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>집중</button>
    </div>
  )
}

export default App
