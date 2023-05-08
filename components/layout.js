import Head from 'next/head'
import Script from 'next/script'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import { useState } from 'react';
//import Header from "../components/Header";
import Main from "../components/Main";
import Mail from "../components/Mail";
import Footer from "../components/Footer";
import 'tailwindcss/tailwind.css';
const name = '[Your Name]'
export const siteTitle = 'MyWebClass.org: Agile & Lean Education for the AI-Driven World'

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar />
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBPFJR2B7M"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TBPFJR2B7M');
        </script>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="Teach web development with ease using our comprehensive teaching resources, lesson plans, and interactive tools. Join our community of educators and improve your curriculum today."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <main className={styles.container}>{children}</main>
      <Mail />
      <Footer></Footer>
    </>
  )
}
