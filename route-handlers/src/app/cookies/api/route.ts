import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';
export function POST(request:NextApiRequest) {
    const cookiesStore = cookies()
    cookiesStore.set('auth','shubhat')
    return new Response('cookie saved')


}

export function GET(req:NextApiRequest){
    const cookiesStore = cookies()
    let allCookies = cookiesStore.getAll()
    console.log(allCookies)
    return new Response('got cookies')
}