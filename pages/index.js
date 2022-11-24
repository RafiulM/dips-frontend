import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Team from '../components/Team'
import Value from '../components/Value'
import Workflow from '../components/Workflow'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DiPStrategy</title>
        <meta name="description" content="Digital Agency" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap&apos;);
        </style>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Services />
        <Workflow />
        <Portfolio />
        <AboutUs />
        <Team />
        <Value />
        <Contact />
        <Footer/>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </footer>
    </div>
  )
}
