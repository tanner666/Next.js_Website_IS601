import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/about'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-white ">
        <div className="max-w-5xl pt-36 pb-24 mx-auto text-center">
        <p>
        At {siteTitle}, our mission is to empower teachers to teach web
        development effectively and inspire students to become lifelong learners
        in the field. We believe that everyone should have access to high-quality
        web development education, regardless of their background or experience
        level.
      </p>
      <p>
        Our platform is designed to provide teachers with the resources they need
        to create engaging and effective web development courses, and to support
        them in their efforts to help their students succeed. We believe that by
        fostering a community of dedicated teachers and learners, we can help to
        create a world where anyone can learn the skills they need to thrive in
        the digital age.
      </p>
      <p>
        We are committed to staying up-to-date with the latest trends and
        technologies in web development, and to continually improving our
        platform to better serve the needs of teachers and students alike. Our
        goal is to be the go-to resource for web development education, and to
        help shape the future of this exciting and rapidly evolving field.
      </p>
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
