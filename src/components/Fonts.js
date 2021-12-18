import { Global } from '@emotion/react'

export const Fonts = () => {
    <Global
        styles={`
            @font-face {
                font-family: 'Montserrat';
                font-style: regular;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            }
        `}
    />
}