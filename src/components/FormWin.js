import React from 'react'

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    textAlign: 'center'
  },
  button: {
    padding: '10px',
    width: '100px'
  }
}

export default function FormWin({ handleReset }) {
  return (
    <div style={styles.div}>
      <h1>Thanks, your subscription has been confirmed!</h1>
      <button onClick={handleReset} style={styles.button}>Reset</button>
    </div>
  )
}
