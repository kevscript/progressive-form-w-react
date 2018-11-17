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
  ul: {
    listStyle: 'none'
  },
  button: {
    padding: '10px',
    width: '100px',
    margin: '0 20px'
  }
}

export default function FormConfirm({ checkValidity, handlePrev, values}) {
  return (
    <div style={styles.div}>
      <h1>Form Confirm</h1>
      <ul style={styles.ul}>
        <li>firstname: {values.firstname}</li>
        <li>lastname: {values.lastname}</li>
        <li>email: {values.mail}</li>
        <li>age: {values.age}</li>
        <li>height: {values.height} (cm)</li>
      </ul>
      <div>
        <button onClick={handlePrev} style={styles.button}>Change</button>
        <button onClick={checkValidity} style={styles.button}>Confirm</button>
      </div>
    </div>
  )
}
