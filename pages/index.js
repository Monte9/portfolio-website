import Head from 'next/head'
import Image from 'next/image'
import {useTheme} from 'next-themes'

export default function Home() {
  const {theme, setTheme} = useTheme('light')

  return (
    <div className="min-h-full py-10 px-5 flex flex-col items-center h-screen bg-white dark:bg-black">
      <Head>
        <title>Monte's Portfolio</title>
        <meta name="description" content="Portfolio website built by Monte Thakkar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container max-w-xl flex flex-col h-screen">
        <header className="container max-w-xl mx-auto flex justify-between mb-10">
          <h1 className="text-4xl font-extrabold">Monte Thakkar</h1>
          <div className="flex items-center justify-center">          
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="dark-mode-toggle" className="sr-only" 
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                  }}
                />
                <div className="container mx-auto flex justify-between bg-gray-600 w-14 h-8 rounded-full px-2 items-center">
                  <div>
                    <img src="images/dark-mode.png" width="16" height="16" role="presentation" className="pointer-events-auto" />
                  </div>
                  <div>
                    <img src="images/light-mode.png" width="16" height="16" role="presentation" className="pointer-events-auto" />
                  </div>
                </div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </header>
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
      </div>
    </div>
  )
}
