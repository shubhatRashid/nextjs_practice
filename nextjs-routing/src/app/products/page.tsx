"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css'
type product = {
  serial : number,
  href : string
}

const products : product [] = [
  {serial:1,href:'/products/01'},
  {serial:2,href:'/products/02'},
  {serial:3,href:'/products/03'},
  {serial:4,href:'not available'}
]

const Products = () => {
  const currentpath = usePathname()
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Link href="/">Home</Link>
        <h1>
            PRODUCTS LIST
        </h1>
        {
          products.map((product,index) => {
            if (index == 4){
              throw new Error('unavailable product')
            }else{
              return  <Link href={product.href} key={index} className="font-bold text-red-500 hover:text-blue-300 ">Product 0{product.serial}</Link>
            }
            
          })
        }
    </div>
  )
}

export default Products