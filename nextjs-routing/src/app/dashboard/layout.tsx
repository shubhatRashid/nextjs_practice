import React from 'react'

export default function layout (
    {
        children,
        carousel,
        Component3,
        notifications
    }
        :
    {   
        children:React.ReactNode,
        carousel : React.ReactNode,
        Component3 : React.ReactNode,
        notifications : React.ReactNode
    }
  )  {
  return (
    <div>
        <div>{children}</div>
        <div>{carousel}</div>
        <div>{Component3}</div>
        <div>{notifications}</div>
    </div>
  )
}
