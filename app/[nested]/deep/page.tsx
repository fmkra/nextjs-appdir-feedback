import Link from 'next/link'
import { getData } from '../../fetchdata'

export async function generateMetadata() {
    const data = await getData()
    return {
        title: 'Deep nested page ' + data,
    }
}

export default async function NestedPage() {
    const data = await getData()

    return (
        <div>
            <p>Deep nested {data}</p>
            <Link href="/nested">Go back</Link>
        </div>
    )
}
