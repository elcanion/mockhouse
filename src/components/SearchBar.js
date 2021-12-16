import { motion } from 'framer-motion';
import { useState } from 'react'
import ImovelCard from './ImovelCard';

function SearchBar({ imoveis }) {

    const [searchTerm, setSearchTerm] = useState('')

    const stagger = {
      animate: {
          transition: {
              staggerChildren: 0.1
          }
      }
  }
    return (
    <>
          <div className="search-bar">
              <input className="imovel-input" type='text' placeholder='Buscar...' onChange={event => {setSearchTerm(event.target.value)}}/>
          </div>
    
          <motion.div variants={stagger} className="imoveis-list">
              {imoveis.filter((imovel) => {
                  if (searchTerm == '') {
                    return imovel
                  } else if (imovel.fields.endereco.toLowerCase().includes(searchTerm.toLowerCase()) || imovel.fields.cidade.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return imovel
                  }
              }).map(imovel => (
                  <ImovelCard key={imovel.sys.id} imovel={imovel} />
              ))}
          </motion.div>
      </>
    );
}
export default SearchBar
