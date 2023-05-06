import Head from 'next/head'
import Script from 'next/script'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import { useState } from 'react';
//import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import 'tailwindcss/tailwind.css'; 
const name = '[Your Name]'
export const siteTitle = 'MyWebClass.org'

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar/>
        <Head>
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
      <Main/>
      <Footer></Footer>
    </>
  )
}
