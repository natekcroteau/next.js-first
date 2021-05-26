import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nate Croteau | Developer</title>
        <meta name="description" content="Personal portfolio for Nate Croteau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <div>
          <h1>Nate Croteau</h1>

          <nav> About Me | Projects | Blog </nav>
        </div>


        <div>
          <h1>About Me</h1>
        </div>


        <div>
          <h1>Projects</h1>
        </div>


        <div>
          <h1>Blog</h1>
        </div>


      </main>

    </div>
  )
}
