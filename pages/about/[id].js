import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/about'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <div className="flex justify-center">
      <Head className="text-80 lh-6 ld-04 font-bold title mb-6">
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.md}>
        <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
        <div className={utilStyles.about} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
