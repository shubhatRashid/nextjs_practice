"use client"
import { usePathname } from "next/navigation"
const notfound = () => {
    const pathName = usePathname()
  return (
    <div>
        <h1>page not found</h1>
        <p>{pathName}</p>
    </div>
  )
}
export default notfound