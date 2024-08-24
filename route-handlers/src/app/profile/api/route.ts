import { NextRequest } from 'next/server';
import { headers } from 'next/headers';
export function GET(request:NextRequest) {
    const allheaders = headers()
    console.log(allheaders.get('Authorization'))
    console.log(request.headers.get('Authorization'))
    return Response.json('headers test')
}