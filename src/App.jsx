import { useState } from 'react'
import { Button } from '@aws-amplify/ui-react';
import './App.css'
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Amplify Demo</h1>
      <div className="card">
        <Button variation="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
