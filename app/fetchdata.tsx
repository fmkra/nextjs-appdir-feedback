import { cookies } from 'next/headers'

export async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return 'Hello' + (cookies().has('anything') ? ' with cookie' : '')
    // cookie forces nextjs to use dynamic rendering
}
