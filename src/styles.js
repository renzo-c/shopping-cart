import { createGlobalStyle } from 'styled-components';

export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800
};

export const colors = {
  //   primary: SKColors.indigo.base,
  //   secondary: SKColors.teal.base,
  //   accent: SKColors.pink.base,
  background: '#D8E6E4',
  //   grey: SKColors.silver.dark,
  text: '#000',
  textHover: '#606665'
  //   textSecondary: SKColors.grey.dark,
};

const GlobalStyles = createGlobalStyle`
      html, body {
        height: '100%'
      }
      body {
        margin: 0;
        padding: 0;
        font-family: "'Source Sans Pro', sans-serif";
        background-color: #D8E6E4;
        color: #000
      }
      #root {
        display: 'flex';
        flex-direction: 'column';
        min-height: '100%';
        background-image: 'url("/lunatic-panda.png")'
      }
      * {
        box-sizing: 'border-box'
      }
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: 600
      }
      h1 {
        font-size: 40;
        line-height: 1
      }
      h2 {
        font-size: 36
      }
      h3 {
        font-size: 30
      }
      h5 {
        font-size: 16;
        text-transform: 'uppercase';
        letter-spacing: 4
      }
`;

export default GlobalStyles;
