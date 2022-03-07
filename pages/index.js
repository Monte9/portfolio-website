import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/shared/Layout'

export default function Home () {
  return (
    <Layout>
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
        <p>Hello, I'm <b>Monte</b>. I'm a software engineer currently work as an iOS  developer at <a href="https://www.expedia.com/" target="_blank">Expedia</a>.</p>
        <p>In the past, I've worked as a fullstack engineer @ <a href="https://www.linkedin.com/company/pillow-residential/" target="_blank">Pillow</a> which was <a href="https://techcrunch.com/2018/10/26/expedia-acquires-pillow-and-apartmentjet-to-conquer-the-short-term-rental-market/" target="_blank">acquired by Expedia</a> in 2018.</p>
        <p>I am super bullish on Blockchain technology and I'm especially interested in <a href="https://www.coindesk.com/what-is-defi" target="_blank">Decentralized Finance (DeFi)</a> and <a href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/" target="_blank">Non-Fungible Tokens (NFTs)</a>.</p>
        <p>You can contact me on <a href="https://twitter.com/MThakkar_" target="_blank">Twitter</a>.</p>
      </section>
    </Layout>
  )
}
