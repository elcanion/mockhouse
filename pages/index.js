import { createClient } from 'contentful'
import { AdContainer } from '../components/AdContainer'
import { Footer } from '../components/Footer'
import WithSubnavigation from '../components/Navbar-dev'
import AdBanner from '../components/AdBanner/AdBanner'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import Head from 'next/head'

export async function getServerSideProps() {

  const client = createClient({
    space: 'wbl12ix2k30c',
    accessToken: 'A6JXPzEUPWEnRIyOqsz-AhFHEjq7W8JmTFlIZ1Jojeg',
  })
  let loading = true;

  const res = await client.getEntries({
    content_type: 'imovel'
  })

  return {
    props: {
      imoveis: res.items,
      counter: res.items.length,
      loading,
    }, 
    //revalidate: 1
  }
}

const Index = ({imoveis}) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <Head>
        <html lang='pt-BR' />
        <title>12162021 build</title>
        <meta name="keywords" content="imobiliaria" />
      </Head>
      <WithSubnavigation />
        <AdContainer>
        
          {
            imoveis.map(imovel => <AdBanner key={imovel.sys.id} imovel={imovel} />)
          }
        </AdContainer>
    </>
  )
}


export default Index
