import { Box, Button, Container, Heading, Icon, Text, useBreakpointValue, useColorMode, useColorModeValue } from "@chakra-ui/react"
import "@fontsource/bodoni-moda"

export const HeroBanner = ({ title }) => {
return (
    <>
        <Box
            width={'60vw'}
            pl={'10%'}
        >
            <Heading 
                as={'h1'}
                fontFamily={'Bodoni Moda'}
                fontSize="5vw"
                color={useColorModeValue('gray.1000', 'white')}
            >
                {title}
            </Heading>
            <Button
            mt={10}
            bg={useColorModeValue('white', 'black')}
            color={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            borderWidth={'1px'}
            borderRadius={'none'}
            >Saiba mais</Button>
        </Box>
        <Box
            pl={'40%'}
            pr={'10%'}
        >
            <Logo
                w={'50%'}
                h={'50%'}
                position={'absolute'}
                top={'20%'}
                left={'50%'}
                //zIndex={0}
                //color={useColorModeValue('yellow.1000', 'yellow.1000')}
            />
        </Box>
        
        
    </>
    )
}


HeroBanner.defaultProps = {
    title: 'O que verificar na compra de um imóvel na planta?',
  }

  
export const Logo = (props) => {
    return (
    <Icon 
        viewBox="0 0 381.99 194.43" 
        xmlns="http://www.w3.org/2000/svg"
        fill={'none'}
        stroke={useColorModeValue('black', 'white')}
        strokeMiterlimit={10}
            {...props}>
        
            {/*<style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:#0c0c0c;stroke-miterlimit:10;}.cls-3{fill:#0c0c0c;}.cls-4{fill:url(#New_Pattern_Swatch_1);}</style>
            */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.53 194.43">
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path className="cls-1" d="M135.62,63.8s-28.49,73.61,24.88,87.14"/>
        <path className="cls-1" d="M177.25,122.88q-3.92,11-13.9,7.14"/><line className="cls-1" x1="130.1" y1="64.16" x2="146.75" y2="76.03"/>
        <path className="cls-1" d="M181.72,80c-6.33-4.11-13-4.33-20.29,2.5"/>
        <ellipse className="cls-2" cx="173.18" cy="90.06" rx="7.15" ry="3.44" transform="translate(43.33 235.8) rotate(-75.78)"/>
        <ellipse className="cls-2" cx="138.23" cy="81.2" rx="7.15" ry="3.44" transform="translate(25.55 195.24) rotate(-75.78)"/>
        <polyline className="cls-1" points="155.31 90.11 150.11 110.63 146.75 112.7 148.2 118.16"/>
        <line className="cls-1" x1="160.77" y1="148" x2="160.77" y2="172.78"/>
        <path className="cls-2" d="M134.63,50.4l-.55,18.86a65.2,65.2,0,0,0,4.67-16,80.19,80.19,0,0,0,39,16c-9.56-4.49-15.74-8.52-13.67-11.39,14.13,3.08,27.62,6.61,29.86,17.94C214.7,57.87,217.23,92.8,201,132,283.86,17.82,134.63,13.08,134.63,50.4Z"/>
        <line className="cls-1" y1="193.93" x2="241.41" y2="193.93"/><path className="cls-1" d="M202,164.59q-5.37,18-28.8,20.42"/>
        <path className="cls-1" d="M133.09,165.72c4.15-1.19,8.36-1.45,12.75.62a27.65,27.65,0,0,1,6.09,9.9l2.35-1.73a52,52,0,0,0-6.06-14.24c-4.22-4.42-10.28-3.49-16.76-1.36a12.69,12.69,0,0,1,3.13-12.18c2.11-1.65,4-1.45,7.81.05l3.44,2.82c3.37,2.48,7.6-2.21,5.32-5.18-7-6.16-16.42-12.71-23.71-4.42-4,5-6.18,10.66-6.85,17.92-3.79,9.39-4.84,22.27-6.89,36"/>
        <path className="cls-1" d="M151.93,176.24v3.35c-5.36-5.24-11.91-6.9-19-7.06"/><path className="cls-1" d="M151.93,179.59a7.66,7.66,0,0,1,.87,7.8c-2.8,3.38-6.68,4.14-10.9,4.08-2.39-1.34-2.59-2.75-1.07-4.21l3.54-3.46"/>
        <path className="cls-1" d="M138.05,185.53c.29,2.2-1.75,7.1-4.06,8.27"/><line className="cls-1" x1="142.45" y1="185.53" x2="135.89" y2="185.53"/><circle className="cls-2" cx="98.34" cy="56.51" r="2.11"/>
        <path className="cls-1" d="M97.87,50.93C92.76,23.1,139.45-7.53,92.76,2.42"/><line className="cls-1" y1="174.8" x2="71.06" y2="174.8"/><line className="cls-1" y1="155.68" x2="71.06" y2="155.68"/>
        <circle className="cls-2" cx="258.9" cy="160.12" r="2.38"/><circle className="cls-2" cx="258.9" cy="148.5" r="2.38"/><circle className="cls-2" cx="258.9" cy="136.88" r="2.38"/>
        <circle className="cls-2" cx="258.9" cy="125.26" r="2.38"/><circle className="cls-2" cx="270.66" cy="160.12" r="2.38"/><circle className="cls-2" cx="270.66" cy="148.5" r="2.38"/>
        <circle className="cls-2" cx="270.66" cy="136.88" r="2.38"/><circle className="cls-2" cx="270.66" cy="125.26" r="2.38"/><circle className="cls-2" cx="281.13" cy="160.12" r="2.38"/>
        <circle className="cls-2" cx="281.13" cy="148.5" r="2.38"/><circle className="cls-2" cx="281.13" cy="136.88" r="2.38"/><circle className="cls-2" cx="281.13" cy="125.26" r="2.38"/>
        <circle className="cls-2" cx="292.9" cy="160.12" r="2.38"/><circle className="cls-2" cx="292.9" cy="148.5" r="2.38"/><circle className="cls-2" cx="292.9" cy="136.88" r="2.38"/>
        <circle className="cls-2" cx="292.9" cy="125.26" r="2.38"/><line className="cls-3" x1="376.18" y1="141.56" x2="367.12" y2="150.62"/><line className="cls-3" x1="376.18" y1="133.44" x2="359.01" y2="150.62"/>
        <line className="cls-3" x1="376.18" y1="124.7" x2="350.27" y2="150.62"/><line className="cls-3" x1="376.18" y1="115.44" x2="341.01" y2="150.62"/><line className="cls-3" x1="376.18" y1="106.62" x2="332.18" y2="150.62"/>
        <line className="cls-3" x1="376.18" y1="98.16" x2="323.71" y2="150.62"/><line className="cls-3" x1="376.18" y1="89.32" x2="314.89" y2="150.62"/><line className="cls-3" x1="376.18" y1="81.2" x2="306.77" y2="150.62"/>
        <line className="cls-3" x1="376.18" y1="72.48" x2="298.03" y2="150.62"/><line className="cls-3" x1="376.18" y1="63.2" x2="288.77" y2="150.62"/><line className="cls-3" x1="376.18" y1="54.38" x2="279.95" y2="150.62"/>
        <line className="cls-3" x1="376.18" y1="45.92" x2="271.47" y2="150.62"/><line className="cls-3" x1="371.41" y1="41.68" x2="267.24" y2="145.85"/><line className="cls-3" x1="363.3" y1="41.68" x2="267.24" y2="137.73"/>
        <line className="cls-3" x1="354.56" y1="41.68" x2="267.24" y2="129"/><line className="cls-3" x1="345.3" y1="41.68" x2="267.24" y2="119.73"/><line className="cls-3" x1="336.46" y1="41.68" x2="267.24" y2="110.91"/>
        <line className="cls-3" x1="328" y1="41.68" x2="267.24" y2="102.44"/><line className="cls-3" x1="319" y1="41.68" x2="267.24" y2="93.45"/><line className="cls-3" x1="310.88" y1="41.68" x2="267.24" y2="85.33"/>
        <line className="cls-3" x1="302.16" y1="41.68" x2="267.24" y2="76.59"/><line className="cls-3" x1="292.88" y1="41.68" x2="267.24" y2="67.33"/><line className="cls-3" x1="284.06" y1="41.68" x2="267.24" y2="58.5"/>
        <line className="cls-3" x1="275.6" y1="41.68" x2="267.24" y2="50.03"/></g></g></svg>
        
        </Icon>);
};
