import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'

export default function Home() {
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
        <p className="my-4 leading-normal text-2xl">Hello, I'm <b>Monte</b>. I'm a software engineer and an NFT collector.</p>
        <p className="my-4 leading-normal text-2xl">I currently work as an iOS developer at <a href="https://www.expedia.com/" target="_blank" className="text-blue-500 hover:underline">Expedia</a>. In the past, I've worked as a fullstack engineer @ <a href="https://www.linkedin.com/company/pillow-residential/" target="_blank">Pillow</a> which was <a href="https://techcrunch.com/2018/10/26/expedia-acquires-pillow-and-apartmentjet-to-conquer-the-short-term-rental-market/" target="_blank">acquired by Expedia</a> in 2018.</p>
        <p className="my-4 leading-normal text-2xl">You can contact me on <a href="https://twitter.com/MThakkar_" target="_blank">Twitter</a>.</p>
      </section>
    </Layout>
  )
}
