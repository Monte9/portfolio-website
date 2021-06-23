import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/shared/Layout'
import ProjectsSection from '../components/projects/ProjectsSection'
import BlogsSection from '../components/blogs/BlogsSection'

import { getSortedProjectsData } from '../lib/projects'
import { getSortedPostsData } from '../lib/posts'

export default function Home ({ allProjectsData, allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="flex items-center justify-center mt-2 mb-4 sm:mt-2 sm:mb-6">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={144}
            width={144}
            alt="Monte Profile Image"
          />
        </div>
        <p>Hello, I'm <b>Monte</b>. I'm a software engineer and an <a href="https://opensea.io/accounts/dearearth" target="_blank">NFT collector</a>.</p>
        <p>I currently work as an iOS  developer at <a href="https://www.expedia.com/" target="_blank">Expedia</a>. In the past, I've worked as a fullstack engineer @ <a href="https://www.linkedin.com/company/pillow-residential/" target="_blank">Pillow</a> which was <a href="https://techcrunch.com/2018/10/26/expedia-acquires-pillow-and-apartmentjet-to-conquer-the-short-term-rental-market/" target="_blank">acquired by Expedia</a> in 2018.</p>
        <p>I am super bullish on crypto 🚀 especially <a href="https://www.coindesk.com/what-is-defi" target="_blank">Decentralized Finance (DeFi)</a> and my goal is to fully transition to blockchain development by the end of 2022.</p>
        <p>Currently available to work on crypto projects as a full-stack developer (including smart contract development in Solidity).</p>
        <p>You can contact me on <a href="https://twitter.com/MThakkar_" target="_blank">Twitter</a>.</p>
      </section>
      <ProjectsSection projects={allProjectsData} />
      <BlogsSection blogs={allPostsData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allProjectsData,
      allPostsData
    }
  }
}
