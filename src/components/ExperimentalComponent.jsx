import React from 'react'

const ExperimentalComponent = props => {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ExperimentalComponent