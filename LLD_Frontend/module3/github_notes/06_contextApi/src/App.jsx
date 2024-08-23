import { useState } from 'react'
import ThemeManager from './poc/themes/ThemeManager'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <ThemeManager />
    </div>
  )
}

export default App
