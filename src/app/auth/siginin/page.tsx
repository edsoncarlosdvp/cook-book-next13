import Link from "next/link"
import { Count } from "../../../components/Count"

export default function Siginin() {
    return (
        <div>
            <h1>Logar</h1>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Count />
        </div>
    )
}