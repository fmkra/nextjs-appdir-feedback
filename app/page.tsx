import Link from 'next/link'
import { getData } from './fetchdata'

export default async function Route() {
    const data = await getData()

    return (
        <div>
            <p>Route {data}</p>
            <Link href="/nested">Go to nested</Link>
        </div>
    )
}
