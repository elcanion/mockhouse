import { Flex, Text } from "@chakra-ui/react"
import { createClient } from "contentful"
import { AccessibilityMenu } from '../../src/components/AccessibilityMenu'
import { useAuth } from "../../src/components/Auth/AuthContext"
import { SlugContainer } from "../../src/components/SlugContent/SlugContainer"
import SlugForm from "../../src/components/SlugContent/SlugForm"

export default function ImovelDetails({ imovel }) {
    if (!imovel) return <AccessibilityMenu />
    const { cidade, carousel, endereco, preco } = imovel.fields
    const { currentUser, logout } = useAuth();

    return (
        <>
        <SlugContainer imovel={imovel}/>
        </>
    )
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'imovel'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'imovel',
        'fields.slug': params.slug
    })

    if (!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            imovel: items[0]
        },
    }
}