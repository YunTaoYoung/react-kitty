import React from 'react'

import { ExampleComponent, Logo } from 'react-kitty'
import 'react-kitty/dist/index.css'

const App = () => {
  return (
    <div>
      <Logo />
      <ExampleComponent text="Create React Library Example 😄" />
    </div>
  )
}

export default App
