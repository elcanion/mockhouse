import { Box, Button, Container, Heading, Icon, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"

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


export const Logo = 
    props => 
    <Icon 
        viewBox="0 0 381.99 194.43" 
        xmlns="http://www.w3.org/2000/svg"
        fill={'none'}
        stroke={useColorModeValue('black', 'white')}
        strokeMiterlimit={10}
            {...props}>
        <defs>
            {/*<style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:#0c0c0c;stroke-miterlimit:10;}.cls-3{fill:#0c0c0c;}.cls-4{fill:url(#New_Pattern_Swatch_1);}</style>
            */}
        <pattern id="New_Pattern_Swatch_1" data-name="New Pattern Swatch 1" width="131.29" height="131.29" 
        patternTransform="translate(-177.4 178.63)" patternUnits="userSpaceOnUse" viewBox="0 0 131.29 131.29">
        <rect class="cls-1" width="131.29" height="131.29"/><line class="cls-2" x1="65.65" y1="-65.65" x2="-65.65" y2="65.65"/>
        <line class="cls-2" x1="70.9" y1="-60.4" x2="-60.4" y2="70.9"/><line class="cls-2" x1="76.15" y1="-55.14" x2="-55.14" y2="76.15"/>
        <line class="cls-2" x1="81.4" y1="-49.89" x2="-49.89" y2="81.4"/><line class="cls-2" x1="86.65" y1="-44.64" x2="-44.64" y2="86.65"/>
        <line class="cls-2" x1="91.91" y1="-39.39" x2="-39.39" y2="91.91"/><line class="cls-2" x1="97.16" y1="-34.14" x2="-34.14" y2="97.16"/>
        <line class="cls-2" x1="102.41" y1="-28.88" x2="-28.88" y2="102.41"/><line class="cls-2" x1="107.66" y1="-23.63" x2="-23.63" y2="107.66"/>
        <line class="cls-2" x1="112.91" y1="-18.38" x2="-18.38" y2="112.91"/><line class="cls-2" x1="118.16" y1="-13.13" x2="-13.13" y2="118.16"/>
        <line class="cls-2" x1="123.42" y1="-7.88" x2="-7.88" y2="123.42"/><line class="cls-2" x1="128.67" y1="-2.63" x2="-2.63" y2="128.67"/>
        <line class="cls-2" x1="133.92" y1="2.63" x2="2.63" y2="133.92"/><line class="cls-2" x1="139.17" y1="7.88" x2="7.88" y2="139.17"/>
        <line class="cls-2" x1="144.42" y1="13.13" x2="13.13" y2="144.42"/><line class="cls-2" x1="149.68" y1="18.38" x2="18.38" y2="149.68"/>
        <line class="cls-2" x1="154.93" y1="23.63" x2="23.63" y2="154.93"/><line class="cls-2" x1="160.18" y1="28.88" x2="28.88" y2="160.18"/>
        <line class="cls-2" x1="165.43" y1="34.14" x2="34.14" y2="165.43"/><line class="cls-2" x1="170.68" y1="39.39" x2="39.39" y2="170.68"/>
        <line class="cls-2" x1="175.93" y1="44.64" x2="44.64" y2="175.93"/><line class="cls-2" x1="181.19" y1="49.89" x2="49.89" y2="181.19"/>
        <line class="cls-2" x1="186.44" y1="55.14" x2="55.14" y2="186.44"/><line class="cls-2" x1="191.69" y1="60.4" x2="60.4" y2="191.69"/>
        <line class="cls-2" x1="196.94" y1="65.65" x2="65.65" y2="196.94"/></pattern></defs>
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-2" d="M135.62,63.8s-28.49,73.61,24.88,87.14"/>
        <path class="cls-2" d="M177.25,122.88q-3.92,11-13.9,7.14"/><line class="cls-2" x1="130.1" y1="64.16" x2="146.75" y2="76.03"/>
        <path class="cls-2" d="M181.72,80c-6.33-4.11-13-4.33-20.29,2.5"/>
        <ellipse class="cls-3" cx="173.18" cy="90.06" rx="7.15" ry="3.44" transform="translate(43.33 235.8) rotate(-75.78)"/>
        <ellipse class="cls-3" cx="138.23" cy="81.2" rx="7.15" ry="3.44" transform="translate(25.55 195.24) rotate(-75.78)"/>
        <polyline class="cls-2" points="155.31 90.11 150.11 110.63 146.75 112.7 148.2 118.16"/><line class="cls-2" x1="160.77" y1="148" x2="160.77" y2="172.78"/>
        <path class="cls-3" d="M134.63,50.4l-.55,18.86a65.2,65.2,0,0,0,4.67-16,80.19,80.19,0,0,0,39,16c-9.56-4.49-15.74-8.52-13.67-11.39,14.13,3.08,27.62,6.61,29.86,17.94C214.7,57.87,217.23,92.8,201,132,283.86,17.82,134.63,13.08,134.63,50.4Z"/>
        <line class="cls-2" y1="193.93" x2="241.41" y2="193.93"/><path class="cls-2" d="M202,164.59q-5.37,18-28.8,20.42"/>
        <path class="cls-2" d="M133.09,165.72c4.15-1.19,8.36-1.45,12.75.62a27.65,27.65,0,0,1,6.09,9.9l2.35-1.73a52,52,0,0,0-6.06-14.24c-4.22-4.42-10.28-3.49-16.76-1.36a12.69,12.69,0,0,1,3.13-12.18c2.11-1.65,4-1.45,7.81.05l3.44,2.82c3.37,2.48,7.6-2.21,5.32-5.18-7-6.16-16.42-12.71-23.71-4.42-4,5-6.18,10.66-6.85,17.92-3.79,9.39-4.84,22.27-6.89,36"/>
        <path class="cls-2" d="M151.93,176.24v3.35c-5.36-5.24-11.91-6.9-19-7.06"/><path class="cls-2" d="M151.93,179.59a7.66,7.66,0,0,1,.87,7.8c-2.8,3.38-6.68,4.14-10.9,4.08-2.39-1.34-2.59-2.75-1.07-4.21l3.54-3.46"/><path class="cls-2" d="M138.05,185.53c.29,2.2-1.75,7.1-4.06,8.27"/>
        <line class="cls-2" x1="142.45" y1="185.53" x2="135.89" y2="185.53"/><circle class="cls-3" cx="98.34" cy="56.51" r="2.11"/>
        <path class="cls-2" d="M97.87,50.93C92.76,23.1,139.45-7.53,92.76,2.42"/><line class="cls-2" y1="174.8" x2="71.06" y2="174.8"/>
        <line class="cls-2" y1="155.68" x2="71.06" y2="155.68"/><circle class="cls-3" cx="258.9" cy="160.12" r="2.38"/><circle class="cls-3" cx="258.9" cy="148.5" r="2.38"/>
        <circle class="cls-3" cx="258.9" cy="136.88" r="2.38"/><circle class="cls-3" cx="258.9" cy="125.26" r="2.38"/><circle class="cls-3" cx="270.66" cy="160.12" r="2.38"/>
        <circle class="cls-3" cx="270.66" cy="148.5" r="2.38"/><circle class="cls-3" cx="270.66" cy="136.88" r="2.38"/><circle class="cls-3" cx="270.66" cy="125.26" r="2.38"/>
        <circle class="cls-3" cx="281.13" cy="160.12" r="2.38"/><circle class="cls-3" cx="281.13" cy="148.5" r="2.38"/><circle class="cls-3" cx="281.13" cy="136.88" r="2.38"/>
        <circle class="cls-3" cx="281.13" cy="125.26" r="2.38"/><circle class="cls-3" cx="292.9" cy="160.12" r="2.38"/><circle class="cls-3" cx="292.9" cy="148.5" r="2.38"/>
        <circle class="cls-3" cx="292.9" cy="136.88" r="2.38"/><circle class="cls-3" cx="292.9" cy="125.26" r="2.38"/><rect class="cls-4" x="273.05" y="41.51" width="108.94" height="108.94"/>
        </g></g>
    </Icon>;


HeroBanner.defaultProps = {
    title: 'O que verificar na compra de um imóvel na planta?',
  }

