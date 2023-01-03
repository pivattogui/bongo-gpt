import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-h-screen h-screen relative">
      <Head>
        <title>Bongo GPT</title>
        <meta name="description" content="🐈 System of questions with variations of mood 🐈‍⬛" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <div className='absolute bottom-0 left-3'>
        <span className='text-white'>Made with ❤️ by <a href="https://github.com/pivattogui" target="_blank" rel="noopener noreferrer" className='text-blue-500'>@pivattogui</a></span>
      </div>
    </div>
  )
}
