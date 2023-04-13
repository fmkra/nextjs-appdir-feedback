import { getData } from '../fetchdata'

export async function generateMetadata() {
    const data = await getData()
    return {
        title: 'Nested page ' + data,
    }
}

export default async function NestedPage() {
    const data = await getData()

    return (
        <div>
            <p>Nested {data}</p>
        </div>
    )
}
