import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { useEffect, useState } from 'react';
import { getSortedPostsData } from '../lib/posts'
import {useRouter} from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home({ allPostsData }) {
  const {t}  = useTranslation();
  return (
    <>
    <h1>{t('welcome')}</h1>
    <Layout>
      <Head>
        <title>MyWebClass.org: Agile & Lean Education for the AI-Driven World</title>
      </Head>
      <section className="body-font">
        <div className="max-w-6xl pt-12 pb-24 mx-auto text-center">
          <h1 className="text-80 lh-6 ld-04 font-bold title mb-6">
            {t('welcome')}
          </h1>
          <h2 className="text-2xl font-semibold lh-6 ld-04 pb-11 subtext">
            {t('description1')}
            <br />
            {t('description2')}
          </h2>
          <Link href="/about/our-mission" className="inline-flex items-center py-3 px-14 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-800 text-md md:mt-0 focus:shadow-outline">
            <div className="flex text-lg justify-center">
              Learn More
            </div>
          </Link>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
            <img
              className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
              alt="Placeholder Image"
              src="./images/Webclass.png"
            />
        </div>
      </section>
    </Layout>
    </>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
