import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  // TODO: TODAS AS VEZES QUE FIZER DUAS OU MAIS CHAMADAS SIMULTÂNEAS E UMA NÃO DEPENDER DA OUTRA
  // const [resp1, resp2] = await Promise.all([
  //   fetch(''),
  //   fetch('')
  // ])
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/auth/siginin">Logar</Link>
      <main className={styles.main}>
        {/* @ts-expect-error Async Server Component */}
        {/* <User /> */}
      </main >
    </div >
  )
}
