import {createGlobalStyle} from 'styled-components';

import CountryWesternWoff from './CountryWestern.woff';
import CountryWestern2Woff2 from './CountryWestern2.woff2';

export default createGlobalStyle`
@font-face {
    font-family: 'CountryWestern';
    src: local('CountryWestern'), local('CountryWestern'),
    url(${CountryWestern2Woff2}) format('woff2'),
    url(${CountryWesternWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
}
 `; 