import React from 'react'

function ResultComponent(props) {
  return (
    <>
      <p className='message'>
        Thank you for your feedback! You have voted {props.rating}
      </p>
    </>
  )
}

export default ResultComponent
