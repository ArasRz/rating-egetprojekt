import React from 'react'

function VoteComponent(props) {
  return (
    <>
      <button className='rating-btn' onClick={props.onClick} value={props.value}>
        {props.children}
      </button>
    </>
  )
}

export default VoteComponent
