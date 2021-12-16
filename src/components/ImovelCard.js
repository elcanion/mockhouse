import Link from 'next/link'
import EmblaCarousel from '../components/EmblaCarousel'
import { motion } from 'framer-motion'
import { MdRoom } from 'react-icons/md'

export default function ImovelCard({ imovel }) {
    const { cidade, endereco, slug, carousel, descricao, preco } = imovel.fields
    const easing = [.6, -0.05, 0.01, 0.99]

    const fadeInUp = {
      initial: {
        y: 60,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: .6,
          ease: easing
        }
      }
    }
    const fadeInLeft = {
        initial: {
            x: -60,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .6,
                ease: easing
            }
        }
    }
    
    return (
        <motion.div exit={{opacity: 0}} initial='initial' animate='animate'>
        <div className="card">
            
            <motion.div variants={fadeInLeft} className="featured">
                {                 
                <EmblaCarousel carousel={carousel} />
                }
            </motion.div>
            {   
                <motion.div variants={fadeInUp} className="content">
                    <div className="info">
                        <p><MdRoom/> { cidade } </p>
                        <h4>{ endereco } </h4>
                    </div>
                    <div className="actions">
                        <h3>R$ { preco },00</h3>
                        <Link href={'/imoveis/' + slug}><a className="btn">Ver mais</a></Link>
                    </div>
                </motion.div>
            }
        </div>
        </motion.div>
    )
}