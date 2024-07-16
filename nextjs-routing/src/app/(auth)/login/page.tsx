"use client"
import { useRouter } from "next/navigation"
export default function login(){
    const router  = useRouter()
    const handleClick = ()=> {
        alert('logged in sucessfully')
        router.push("/")

    }
    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}