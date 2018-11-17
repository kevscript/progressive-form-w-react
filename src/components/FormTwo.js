import React from 'react'

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
  },
  input: {
    width: '300px',
    marginBottom: '20px',
    padding: '10px'
  },
  button: {
    padding: '10px',
    width: '100px',
    margin: '0 20px'
  },
  h3: {
    color: 'red'
  }
}

export default function FormTwo({ handleChange, checkValidity, handlePrev, values, showMessage }) {
  return (
    <div style={styles.div}>
      <h1>Form Two</h1>
      <input 
        type="number" 
        placeholder="your age" 
        style={styles.input}
        value={values.age}
        name='age'
        onChange={handleChange}
      />
      <input 
        type="number" 
        placeholder="your height in cm" 
        style={styles.input}
        value={values.height}
        name='height'
        onChange={handleChange}
      />
      <div>
        <button onClick={handlePrev} style={styles.button}>Prev</button>
        <button onClick={checkValidity} style={styles.button}>Next</button>
      </div>
      <h3 style={styles.h3}>{showMessage ? "Some fields are not valid or empty." : ""}</h3>
    </div>
  )
}
