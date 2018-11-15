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
    width: '100px'
  }
}

export default function FormOne({ handleChange, handleNext, values }) {
  return (
    <div style={styles.div}>
      <h1>Form One</h1>
      <input 
        type="text" 
        placeholder="your firstname" 
        style={styles.input} 
        value={values.firstname}
        name='firstname'
        onChange={handleChange}
      />
      <input 
        type="text" 
        placeholder="your lastname" 
        style={styles.input}
        value={values.lastname}
        name='lastname'
        onChange={handleChange}
      />
      <input
        type="mail" 
        placeholder="your mail" 
        style={styles.input}
        value={values.mail}
        name='mail'
        onChange={handleChange}
      />
      
      <div>
        <button style={styles.button} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}
