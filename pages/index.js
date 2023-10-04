import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'
import Script from 'next/script'

export default function Home({ results })   
{
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu is a streaming platform with your all time favorite TV shows, movies and documentaries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy='lazyOnload'
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`)
        }}
      /> */}
      <Header/>
      <Nav/>
      <Results results={results}/>
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(result => result.json())

  return {
    props: {
      results: request.results
    }
  }
}