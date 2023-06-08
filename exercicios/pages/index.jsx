import Head from 'next/head'
import Image from 'next/image'
import Titulo from '../components/Titulo'
import Estilo from '../components/Estilo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Curso Next App</title>
        <meta name="description" content="Curso NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Titulo title={"Ola, Next"} subTitle={"Cod3r cursos"} />
        <Estilo numero={1} />
      </main>
    </div>
  )
}
