import { cookies } from 'next/headers';
export function POST() {
    const cookiesStore = cookies()
    cookiesStore.set('name','shubhat')
    cookiesStore.set('email','abc@gmail.com')
    cookiesStore.set('jsonToken','123456789abc')
    return new Response('cookie saved')


}

export function GET(){
    const cookiesStore = cookies()
    let allCookies = cookiesStore.get('jsonToken')
    console.log(allCookies)
    return new Response('got cookies')
}