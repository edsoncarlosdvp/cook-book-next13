import Link from "next/link"

export default function Graph() {
    return (
        <div>
            <h1>Gráficos</h1>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/auth/siginin">Logar</Link>
        </div>
    )
}