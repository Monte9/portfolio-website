import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useTheme} from 'next-themes'

export const siteTitle = "Monte's Portfolio"

export default function Layout({ children, home }) {
  const {theme, setTheme} = useTheme('light')

  return (
    <div className="py-5 px-5 flex flex-col items-center bg-white dark:bg-black">
      <div className="container max-w-xl flex flex-col">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Portfolio website built by Monte Thakkar"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="container max-w-xl mx-auto flex justify-between mb-5">
          {home ? 
            <p className="text-4xl font-extrabold">Monte Thakkar</p> :
            <div className="flex flex-row">
              <Link href="/">
                <a className="flex justify-center items-center mr-2">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className="rounded-full"
                    height={44}
                    width={44}
                    alt="Monte Profile Image"
                  />
                </a>
              </Link>
              <p className="text-2xl font-bold">
                <Link href="/">
                  <a>Monte Thakkar</a>
                </Link>
              </p>
            </div>
          }
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
                    <img src="/images/dark-mode.png" width="16" height="16" role="presentation" className="pointer-events-auto" />
                  </div>
                  <div>
                    <img src="/images/light-mode.png" width="16" height="16" role="presentation" className="pointer-events-auto" />
                  </div>
                </div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </header>
        <main>{children}</main>
        {!home && (
          <div className="text-lg font-normal my-4">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
