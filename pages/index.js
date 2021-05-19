import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import ProjectsSection from '../components/projects_section'
import Date from '../components/date'

import { getSortedProjectsData } from '../lib/projects'
import { getSortedPostsData } from '../lib/posts'

export default function Home ({ allProjectsData, allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="flex items-center justify-center">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={144}
            width={144}
            alt="Monte Profile Image"
          />
        </div>
        <p className="my-4 leading-normal text-2xl">Hello, I'm <b>Monte</b>. I'm a software engineer and an <a href="https://opensea.io/accounts/dearearth" target="_blank">NFT collector</a>.</p>
        <p className="my-4 leading-normal text-2xl">I currently work as an iOS developer at <a href="https://www.expedia.com/" target="_blank">Expedia</a>. In the past, I've worked as a fullstack engineer @ <a href="https://www.linkedin.com/company/pillow-residential/" target="_blank">Pillow</a> which was <a href="https://techcrunch.com/2018/10/26/expedia-acquires-pillow-and-apartmentjet-to-conquer-the-short-term-rental-market/" target="_blank">acquired by Expedia</a> in 2018.</p>
        <p className="my-4 leading-normal text-2xl">You can contact me on <a href="https://twitter.com/MThakkar_" target="_blank">Twitter</a>.</p>
      </section>
      <ProjectsSection projects={allProjectsData} />
      <section>
        <h2>Blog</h2>
        {allPostsData.map(({ id, date, title }) => (
          <div key={id} className="text-xl">
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <div className="mt-2 text-gray-500 text-base">
              <Date dateString={date} />
            </div>
          </div>
        ))}
      </section>
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
