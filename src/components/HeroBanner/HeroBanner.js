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
            <Logo_new
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
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path classNameName="cls-1" d="M135.62,63.8s-28.49,73.61,24.88,87.14"/>
        <path classNameName="cls-1" d="M177.25,122.88q-3.92,11-13.9,7.14"/><line classNameName="cls-1" x1="130.1" y1="64.16" x2="146.75" y2="76.03"/>
        <path classNameName="cls-1" d="M181.72,80c-6.33-4.11-13-4.33-20.29,2.5"/>
        <ellipse fill={useColorModeValue('black', 'white')} classNameName="cls-2" cx="173.18" cy="90.06" rx="7.15" ry="3.44" transform="translate(43.33 235.8) rotate(-75.78)"/>
        <ellipse fill={useColorModeValue('black', 'white')} classNameName="cls-2" cx="138.23" cy="81.2" rx="7.15" ry="3.44" transform="translate(25.55 195.24) rotate(-75.78)"/>
        <polyline classNameName="cls-1" points="155.31 90.11 150.11 110.63 146.75 112.7 148.2 118.16"/>
        <line classNameName="cls-1" x1="160.77" y1="148" x2="160.77" y2="172.78"/>
        <path fill={useColorModeValue('black', 'white')} classNameName="cls-2" d="M134.63,50.4l-.55,18.86a65.2,65.2,0,0,0,4.67-16,80.19,80.19,0,0,0,39,16c-9.56-4.49-15.74-8.52-13.67-11.39,14.13,3.08,27.62,6.61,29.86,17.94C214.7,57.87,217.23,92.8,201,132,283.86,17.82,134.63,13.08,134.63,50.4Z"/>
        <line classNameName="cls-1" y1="193.93" x2="241.41" y2="193.93"/><path classNameName="cls-1" d="M202,164.59q-5.37,18-28.8,20.42"/>
        <path classNameName="cls-1" d="M133.09,165.72c4.15-1.19,8.36-1.45,12.75.62a27.65,27.65,0,0,1,6.09,9.9l2.35-1.73a52,52,0,0,0-6.06-14.24c-4.22-4.42-10.28-3.49-16.76-1.36a12.69,12.69,0,0,1,3.13-12.18c2.11-1.65,4-1.45,7.81.05l3.44,2.82c3.37,2.48,7.6-2.21,5.32-5.18-7-6.16-16.42-12.71-23.71-4.42-4,5-6.18,10.66-6.85,17.92-3.79,9.39-4.84,22.27-6.89,36"/>
        <path classNameName="cls-1" d="M151.93,176.24v3.35c-5.36-5.24-11.91-6.9-19-7.06"/><path classNameName="cls-1" d="M151.93,179.59a7.66,7.66,0,0,1,.87,7.8c-2.8,3.38-6.68,4.14-10.9,4.08-2.39-1.34-2.59-2.75-1.07-4.21l3.54-3.46"/>
        <path classNameName="cls-1" d="M138.05,185.53c.29,2.2-1.75,7.1-4.06,8.27"/><line classNameName="cls-1" x1="142.45" y1="185.53" x2="135.89" y2="185.53"/><circle classNameName="cls-2" cx="98.34" cy="56.51" r="2.11"/>
        <path classNameName="cls-1" d="M97.87,50.93C92.76,23.1,139.45-7.53,92.76,2.42"/><line classNameName="cls-1" y1="174.8" x2="71.06" y2="174.8"/><line classNameName="cls-1" y1="155.68" x2="71.06" y2="155.68"/>
        <circle classNameName="cls-2" cx="258.9" cy="160.12" r="2.38"/><circle classNameName="cls-2" cx="258.9" cy="148.5" r="2.38"/><circle classNameName="cls-2" cx="258.9" cy="136.88" r="2.38"/>
        <circle classNameName="cls-2" cx="258.9" cy="125.26" r="2.38"/><circle classNameName="cls-2" cx="270.66" cy="160.12" r="2.38"/><circle classNameName="cls-2" cx="270.66" cy="148.5" r="2.38"/>
        <circle classNameName="cls-2" cx="270.66" cy="136.88" r="2.38"/><circle classNameName="cls-2" cx="270.66" cy="125.26" r="2.38"/><circle classNameName="cls-2" cx="281.13" cy="160.12" r="2.38"/>
        <circle classNameName="cls-2" cx="281.13" cy="148.5" r="2.38"/><circle classNameName="cls-2" cx="281.13" cy="136.88" r="2.38"/><circle classNameName="cls-2" cx="281.13" cy="125.26" r="2.38"/>
        <circle classNameName="cls-2" cx="292.9" cy="160.12" r="2.38"/><circle classNameName="cls-2" cx="292.9" cy="148.5" r="2.38"/><circle classNameName="cls-2" cx="292.9" cy="136.88" r="2.38"/>
        <circle classNameName="cls-2" cx="292.9" cy="125.26" r="2.38"/><line classNameName="cls-3" x1="376.18" y1="141.56" x2="367.12" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="133.44" x2="359.01" y2="150.62"/>
        <line classNameName="cls-3" x1="376.18" y1="124.7" x2="350.27" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="115.44" x2="341.01" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="106.62" x2="332.18" y2="150.62"/>
        <line classNameName="cls-3" x1="376.18" y1="98.16" x2="323.71" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="89.32" x2="314.89" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="81.2" x2="306.77" y2="150.62"/>
        <line classNameName="cls-3" x1="376.18" y1="72.48" x2="298.03" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="63.2" x2="288.77" y2="150.62"/><line classNameName="cls-3" x1="376.18" y1="54.38" x2="279.95" y2="150.62"/>
        <line classNameName="cls-3" x1="376.18" y1="45.92" x2="271.47" y2="150.62"/><line classNameName="cls-3" x1="371.41" y1="41.68" x2="267.24" y2="145.85"/><line classNameName="cls-3" x1="363.3" y1="41.68" x2="267.24" y2="137.73"/>
        <line classNameName="cls-3" x1="354.56" y1="41.68" x2="267.24" y2="129"/><line classNameName="cls-3" x1="345.3" y1="41.68" x2="267.24" y2="119.73"/><line classNameName="cls-3" x1="336.46" y1="41.68" x2="267.24" y2="110.91"/>
        <line classNameName="cls-3" x1="328" y1="41.68" x2="267.24" y2="102.44"/><line classNameName="cls-3" x1="319" y1="41.68" x2="267.24" y2="93.45"/><line classNameName="cls-3" x1="310.88" y1="41.68" x2="267.24" y2="85.33"/>
        <line classNameName="cls-3" x1="302.16" y1="41.68" x2="267.24" y2="76.59"/><line classNameName="cls-3" x1="292.88" y1="41.68" x2="267.24" y2="67.33"/><line classNameName="cls-3" x1="284.06" y1="41.68" x2="267.24" y2="58.5"/>
        <line classNameName="cls-3" x1="275.6" y1="41.68" x2="267.24" y2="50.03"/></g></g></svg>
        
        </Icon>);
};

export const Logo_new = (props) => {
    return (
    <Icon 
        viewBox="0 0 381.99 194.43" 
        xmlns="http://www.w3.org/2000/svg"
        fill={'none'}
        stroke={useColorModeValue('black', 'black')}
        strokeMiterlimit={10}
            {...props}>
        
            {/*<style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:#0c0c0c;stroke-miterlimit:10;}.cls-3{fill:#0c0c0c;}.cls-4{fill:url(#New_Pattern_Swatch_1);}</style>
            */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406.11 273">
    <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2">
    <path fill={useColorModeValue("#A31D05", "#ffaf5f")} stroke="none" className="cls-1" d="M218.4.05c84.92,2,177.26,70.64,180,140.82.22,5.48,1.58,40.22-21.17,61.41C343.33,233.86,296,198,226.87,226.63c-38.61,16-34.51,31.6-66.7,41.3C102.39,285.34,20,255.94,3.46,209.69-21.54,139.61,92.84-2.93,218.4.05Z"/>
    <rect className="cls-2" x="293.88" y="75.09" width="112.23" height="106.91"/><path className="cls-3" d="M153.14,106.54S124.65,180.15,178,193.68"/>
    <path className="cls-3" d="M194.78,165.61q-3.93,11.05-13.91,7.14"/><line className="cls-3" x1="147.62" y1="106.9" x2="164.28" y2="118.77"/>
    <path className="cls-3" d="M199.25,122.71c-6.34-4.11-13-4.34-20.3,2.5"/><ellipse className="cls-4" cx="190.7" cy="132.8" rx="7.15" ry="3.44" transform="translate(15.12 285.02) rotate(-75.78)"/>
    <ellipse className="cls-4" cx="155.75" cy="123.94" rx="7.15" ry="3.44" transform="translate(-2.66 244.46) rotate(-75.78)"/>
    <polyline className="cls-3" points="172.83 132.84 167.63 153.37 164.28 155.43 165.72 160.9"/><line className="cls-3" x1="178.29" y1="190.74" x2="178.29" y2="215.52"/>
    <path className="cls-4" d="M152.15,93.13,151.6,112a65.08,65.08,0,0,0,4.67-16,80.13,80.13,0,0,0,39,16c-9.56-4.49-15.74-8.51-13.67-11.39,14.13,3.09,27.62,6.62,29.87,18,20.75-18,23.28,17,7.08,56.16C301.38,60.56,152.15,55.82,152.15,93.13Z"/>
    <line className="cls-3" x1="17.52" y1="236.66" x2="258.93" y2="236.66"/><path className="cls-3" d="M219.5,207.33q-5.35,18-28.8,20.42"/>
    <path className="cls-3" d="M150.61,208.45c4.15-1.18,8.36-1.45,12.75.62a27.77,27.77,0,0,1,6.09,9.91l2.36-1.73A52.24,52.24,0,0,0,165.74,203c-4.22-4.42-10.28-3.49-16.76-1.37a12.68,12.68,0,0,1,3.14-12.18c2.1-1.64,4-1.44,7.8.06l3.44,2.82c3.37,2.48,7.61-2.21,5.32-5.18-7.05-6.16-16.42-12.71-23.71-4.42-4,5-6.18,10.66-6.85,17.91-3.78,9.4-4.84,22.28-6.89,36"/>
    <path className="cls-3" d="M169.45,219v3.34c-5.36-5.23-11.91-6.9-18.95-7.06"/>
    <path className="cls-3" d="M169.45,222.32a7.67,7.67,0,0,1,.87,7.8c-2.8,3.39-6.68,4.15-10.9,4.09-2.39-1.35-2.59-2.76-1.07-4.21l3.54-3.47"/>
    <path className="cls-3" d="M155.58,228.27c.29,2.19-1.76,7.1-4.06,8.26"/><line className="cls-3" x1="159.98" y1="228.27" x2="153.42" y2="228.27"/>
    <circle className="cls-4" cx="115.86" cy="99.24" r="2.11"/><path className="cls-3" d="M115.39,93.66c-5.11-27.82,41.58-58.46-5.11-48.5"/>
    <line className="cls-3" x1="17.52" y1="217.54" x2="88.58" y2="217.54"/><line className="cls-3" x1="17.52" y1="198.42" x2="88.58" y2="198.42"/>
    <circle className="cls-4" cx="276.42" cy="202.85" r="2.38"/><circle className="cls-4" cx="276.42" cy="191.23" r="2.38"/>
    <circle className="cls-4" cx="276.42" cy="179.62" r="2.38"/><circle className="cls-4" cx="276.42" cy="168" r="2.38"/><circle className="cls-4" cx="288.19" cy="202.85" r="2.38"/>
    <circle className="cls-4" cx="288.19" cy="191.23" r="2.38"/><circle className="cls-4" cx="288.19" cy="179.62" r="2.38"/><circle className="cls-4" cx="288.19" cy="168" r="2.38"/>
    <circle className="cls-4" cx="298.65" cy="202.85" r="2.38"/><circle className="cls-4" cx="298.65" cy="191.23" r="2.38"/><circle className="cls-4" cx="298.65" cy="179.62" r="2.38"/>
    <circle className="cls-4" cx="298.65" cy="168" r="2.38"/><circle className="cls-4" cx="310.42" cy="202.85" r="2.38"/><circle className="cls-4" cx="310.42" cy="191.23" r="2.38"/>
    <circle className="cls-4" cx="310.42" cy="179.62" r="2.38"/><circle className="cls-4" cx="310.42" cy="168" r="2.38"/><line className="cls-5" x1="393.7" y1="184.29" x2="384.64" y2="193.35"/>
    <line className="cls-5" x1="393.7" y1="176.17" x2="376.53" y2="193.35"/><line className="cls-5" x1="393.7" y1="167.43" x2="367.79" y2="193.35"/>
    <line className="cls-5" x1="393.7" y1="158.17" x2="358.53" y2="193.35"/><line className="cls-5" x1="393.7" y1="149.35" x2="349.7" y2="193.35"/>
    <line className="cls-5" x1="393.7" y1="140.89" x2="341.23" y2="193.35"/><line className="cls-5" x1="393.7" y1="132.05" x2="332.41" y2="193.35"/>
    <line className="cls-5" x1="393.7" y1="123.93" x2="324.29" y2="193.35"/><line className="cls-5" x1="393.7" y1="115.21" x2="315.55" y2="193.35"/>
    <line className="cls-5" x1="393.7" y1="105.93" x2="306.29" y2="193.35"/><line className="cls-5" x1="393.7" y1="97.11" x2="297.47" y2="193.35"/>
    <line className="cls-5" x1="393.7" y1="88.65" x2="288.99" y2="193.35"/><line className="cls-5" x1="388.93" y1="84.41" x2="284.76" y2="188.58"/>
    <line className="cls-5" x1="380.82" y1="84.41" x2="284.76" y2="180.46"/><line className="cls-5" x1="372.08" y1="84.41" x2="284.76" y2="171.73"/>
    <line className="cls-5" x1="362.82" y1="84.41" x2="284.76" y2="162.46"/><line className="cls-5" x1="353.98" y1="84.41" x2="284.76" y2="153.64"/>
    <line className="cls-5" x1="345.52" y1="84.41" x2="284.76" y2="145.17"/><line className="cls-5" x1="336.52" y1="84.41" x2="284.76" y2="136.18"/>
    <line className="cls-5" x1="328.4" y1="84.41" x2="284.76" y2="128.06"/><line className="cls-5" x1="319.68" y1="84.41" x2="284.76" y2="119.32"/>
    <line className="cls-5" x1="310.4" y1="84.41" x2="284.76" y2="110.06"/><line className="cls-5" x1="301.58" y1="84.41" x2="284.76" y2="101.23"/>
    <line className="cls-5" x1="293.12" y1="84.41" x2="284.76" y2="92.76"/></g></g>
    </svg>
        
        </Icon>);
};