import { json } from "stream/consumers"

export async function GET() {
    const info = {
        id : 1,
        name : 'Hello wordld',
        description : 'this is a route handler'
    }
    return new Response(JSON.stringify(info))
}