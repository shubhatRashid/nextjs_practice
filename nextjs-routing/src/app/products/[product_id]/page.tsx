import { Metadata } from "next";

type props = {
  product_id : number
}

export const generateMetadata = ({params}:{params:props}):Metadata => {
  return {
    title : `${params.product_id}`,
    description : 'specific product'
  }
}

export default function ({params}:{params:props}){
  return (
    <div>
      <h1>{params.product_id}</h1>
    </div>
  )
}