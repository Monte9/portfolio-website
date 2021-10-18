import Head from 'next/head'

import Layout from '../../components/shared/Layout'
import DateText from '../../components/shared/DateText'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="mb-2">{postData.title}</h1>
        <h3 className="text-gray-500 mt-0 mb-4">{postData.subtitle}</h3>
        <p className="text-gray-400 mt-0">
          <DateText dateString={postData.date} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
