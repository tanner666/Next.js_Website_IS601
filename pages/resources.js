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
      <section className="text-whitebody-font">
        <div className="max-w-6xl pt-12 pb-24 mx-auto text-left">
      <div>
      <Head>
        <title>Learning Resources | My Website</title>
        <meta name="description" content="A curated list of popular learning websites." />
      </Head>
      <h1 className="text-color-black text-center text-4xl font-bold lh-6 ld-08 title mb-10">
            Learning Resources
      </h1>
      <ul className="text-xl line-height: 6rem font-semibold lh-10 ld-02 font-bold title mb-6"> 
        <div className="flex margin-bottom:40px">
        
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.codecademy.com/" target="_blank">
            Codecademy
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.udemy.com/" target="_blank">
            Udemy
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.udacity.com/" target="_blank">
          Udacity
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.coursera.org/" target="_blank">
          Coursera
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.edx.org/" target="_blank">
            edX
          </Link>
        </li>

        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.khanacademy.org/" target="_blank">
            Khan Academy
          </Link>
        </li>
        </div>
      </ul>

      <ul className="text-xl line-height: 6rem font-semibold lh-10 ld-02 font-bold title mb-6"> 
        <div className="flex">
        <li className="margin-top: 10px flex-auto">
          <Link href="https://frontendmasters.com/" target="_blank">
            Frontend Masters
          </Link>
        </li>
        
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.linkedin.com/learning/" target="_blank">
            Linkedin Learning
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.freecodecamp.org/" target="_blank">
            FreeCodeCamp
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.geeksforgeeks.org/web-development/?ref=shm" target="_blank">
          Geeksforgeeks
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.w3schools.com/bootcamp/index.php" target="_blank">
          W3 Schools
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://teamtreehouse.com/" target="_blank">
            TreeHouse
          </Link>
        </li>
        </div>
      </ul>

      <ul className="text-xl line-height: 6rem font-semibold lh-10 ld-02 font-bold title mb-6"> 
        <div className="flex">
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.codewars.com/" target="_blank">
            Codewars
          </Link>
        </li>
        
        <li className="margin-top: 10px flex-auto">
          <Link href="https://developer.mozilla.org/en-US/" target="_blank">
            MDN Web Docs
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://www.codementor.io/" target="_blank">
            Codementor
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://learndigital.withgoogle.com/digitalgarage/" target="_blank">
          Google Digial Garage
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://developer.mozilla.org/en-US/" target="_blank">
          Mozilla Developer Network
          </Link>
        </li>
        <li className="margin-top: 10px flex-auto">
          <Link href="https://scrimba.com/#overview" target="_blank">
            Scrimba
          </Link>
        </li>
        </div>
      </ul>

    </div>
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