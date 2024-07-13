import Link from "next/link"

const Products = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Link href="/">Home</Link>
        <h1>
            PRODUCTS LIST
        </h1>
        <Link href="/products/01">P1</Link>
        <Link href="/products/02">P2</Link>
        <Link href="/products/03">P3</Link>
    </div>
  )
}

export default Products