import { NextRequest } from "next/server"
import data from "./data"
export async function GET(request:NextRequest) {
    
    let searchParams = request.nextUrl.searchParams
    let allQueries = searchParams.get('query')
    console.log(allQueries)
    let newData = data.filter((item) => item.description.includes(allQueries))
    return new Response(JSON.stringify(newData))
}

export async function POST(request:Request) {
    const requestData = await request.json()
    data.push(requestData)
    return new Response(JSON.stringify(data),{
        headers : {
            'Content-Type':'application/json'
        },
        status : 202
    })
}
