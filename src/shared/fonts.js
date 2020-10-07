 import {createGlobalStyle} from 'styled-components';
 import CountryWestern from '../assets/fonts/CountryWestern.woff';
 import CountryWestern from '../assets/fonts/CountryWestern.woff2';

 export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'CountryWestern';
        font-weight: 300;
        font-style: normal;
        src: url(${CountryWestern})
    }
    `;
    