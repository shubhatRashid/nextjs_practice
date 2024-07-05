import React from 'react'

const NestedProperty = ({params}:{params:{nestedProperty:number}}) => {
  return (
    <div>{params.nestedProperty}</div>
  )
}

export default NestedProperty