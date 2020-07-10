import React from 'react'
import styles from './styles.module.css'

import Logo from './js/Logo'

const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      <h2>Test</h2>Example Component: {text}
    </div>
  )
}

export { ExampleComponent, Logo }
