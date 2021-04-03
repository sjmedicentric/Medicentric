import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medicentric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://new.medicentric.com">Medicentric</a>
        </h1>

        <p className={styles.description}>
          Go to Dashboards <a href="http://localhost:3000/medidashboard/medi-dashboard">Medicentric</a>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Medicentric Users &rarr;</h3>
            <p>View, Create, Edit or Delete Users</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Clinic &rarr;</h3>
            <p>View, Create, Edit or Delete Clinics</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Vendors &rarr;</h3>
            <p>View, Create, Edit or Delete Vendors</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
            <h3>Drivers &rarr;</h3>
            <p>View, Create, Edit or Delete Drivers</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
