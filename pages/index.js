import Head from 'next/head'
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

      <header className="container mx-auto flex justify-between mb-10">
        <h1 className="text-3xl">Monte Thakkar</h1>
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
    </div>
  )
}
