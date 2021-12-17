import { AdContainer } from './AdContainer'
import WithSubnavigation from './Navbar-dev'
import AdBanner from './AdBanner/AdBanner'
import { Footer } from './Footer'

export function Layout ({ children }) {
    return (
        <>
        <WithSubnavigation />
            { children }
        <Footer />
        </>
    )
}