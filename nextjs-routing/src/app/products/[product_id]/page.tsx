import React from 'react'

interface Params {
    product_id : number
}
const Product = ({params}:{params:Params}) => {
  
  return (
    <div>Product id is {params.product_id}</div>
  )
}

export default Product