import { useState } from 'react'
import '../src/App.css'

function IncreaseCount() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default IncreaseCount
