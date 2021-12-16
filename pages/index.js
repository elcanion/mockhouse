import { createClient } from 'contentful'
import { useState } from 'react'
import Head from 'next/head'
import { Layout } from '../src/components/Layout'

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
      <Layout imoveis={imoveis}/>
    </>
  )
}


export default Index
