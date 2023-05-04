import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="body-font">
        <div className="max-w-6xl pt-12 pb-24 mx-auto text-center">
          <h1 className="text-80 lh-6 ld-04 font-bold title mb-6">
            Welcome to MyWebClass
          </h1>
          <h2 className="text-2xl font-semibold lh-6 ld-04 pb-11 subtext">
          An online platform for teachers to learn and teach web development! 
            <br />
            Designed to provide teachers with the resources they need to effectively teach web technologies.
          </h2>
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
