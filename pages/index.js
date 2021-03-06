import { createClient } from 'contentful'
import { useState } from 'react'
import Head from 'next/head'
import { Layout } from '../src/components/Layout'
import { AdContainer } from '../src/components/AdContainer'
import AdBanner from '../src/components/AdBanner/AdBanner'
import { Hero } from '../src/components/Hero'
import { Button } from '@chakra-ui/react'
import { HeroBanner } from '../src/components/HeroBanner2/HeroBanner'

export async function getServerSideProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
      
      {//<Hero />
      }
      {<HeroBanner />
      }
      {<AdContainer>
        {
            imoveis.map(imovel => <AdBanner key={imovel.sys.id} imovel={imovel} />)
            //imoveis.map(imovel => {console.log(imovel.fields.lavabos)})
          }
        </AdContainer>
        }
  
    </>
  )
}


export default Index
