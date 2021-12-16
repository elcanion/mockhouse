import { AdContainer } from './AdContainer'
import WithSubnavigation from './Navbar-dev'
import AdBanner from './AdBanner/AdBanner'
import { Footer } from './Footer'

export function Layout ({imoveis}) {
    return (
        <>
        <WithSubnavigation />
        <AdContainer>
        
          {
            imoveis.map(imovel => <AdBanner key={imovel.sys.id} imovel={imovel} />)
          }
        </AdContainer>
        <Footer />
        </>
    )
}