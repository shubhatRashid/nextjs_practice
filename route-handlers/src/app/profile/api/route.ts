import { NextRequest } from 'next/server';
import { headers } from 'next/headers';
export function GET(request:NextRequest) {
    const allheaders = headers()
    console.log(allheaders.get('Authorization'))
    console.log(request.headers.get('Authorization'))
    return Response.json('<h1>headers test</h1>',{
        headers:{
            "Content-Type" : 'text/html',
            'Authorization':'Bearer 456'
        },
        
    })
}