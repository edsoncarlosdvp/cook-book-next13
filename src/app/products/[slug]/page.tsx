import Link from "next/link"

interface ProductProps {
    params: {
        slug: string
    }
}

export const generateMetadata = ({ params }: ProductProps) => {
    return {
        title: `Produto ${params.slug}`
    }
}

export default function Product({ params }: ProductProps) {
    return (
        <div>
            <h1>Produto: {params.slug}</h1>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
        </div>
    )
}