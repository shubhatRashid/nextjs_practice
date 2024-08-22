import data from "./data"
export async function GET() {
    
    return new Response(JSON.stringify(data))
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
