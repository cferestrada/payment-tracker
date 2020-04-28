/** @jsx jsx */
import { css } from '@emotion/core';
import { colors, fonts, fontsize } from '../react-components/style/theme';
import { em } from '../react-components/helpers/units';

const baseStyles = css`
  * {
    font-family: ${fonts.primary};
    font-size: ${em(fontsize.std)};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  body, html {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body,
  #root {
    display: flex;
    flex-direction: column;
  }

  #root {
    flex: 1 0 auto;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  [data-whatintent='mouse'] *:focus {
    outline: none;
  }

  @font-face {
    font-family: 'Genath';
    src: url('./fonts/genath-regular-webfont.woff2') format('woff2'),
      url('./fonts/genath-regular-webfont.woff') format('woff'),
      url('./fonts/genath-regular-webfont.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Genath';
    src: url('./fonts/genath-regularita-webfont.woff2') format('woff2'),
      url('./fonts/genath-regularita-webfont.woff') format('woff'),
      url('./fonts/genath-regularita-webfont.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Genath';
    src: url('./fonts/Genath-Bold-webfont.woff2') format('woff2'),
      url('./fonts/Genath-Bold-webfont.woff') format('woff'),
      url('./fonts/Genath-Bold-webfont.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Genath';
    src: url('./fonts/Genath-BoldIta-webfont.woff2') format('woff2'),
      url('./fonts/Genath-BoldIta-webfont.woff') format('woff'),
      url('./fonts/Genath-BoldIta-webfont.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Maison Neue';
    src: url('./fonts/MaisonNeueWEB-Book.woff2') format('woff2'),
      url('./fonts/MaisonNeueWEB-Book.woff') format('woff'),
      url('./fonts/MaisonNeueWEB-Book.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Maison Neue';
    src: url('./fonts/MaisonNeueWEB-BookItalic.woff2') format('woff2'),
      url('./fonts/MaisonNeueWEB-BookItalic.woff') format('woff'),
      url('./fonts/MaisonNeueWEB-BookItalic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Maison Neue';
    src: url('./fonts/MaisonNeueWEB-Bold.woff2') format('woff2'),
      url('./fonts/MaisonNeueWEB-Bold.woff') format('woff'),
      url('./fonts/MaisonNeueWEB-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Maison Neue';
    src: url('./fonts/MaisonNeueWEB-BoldItalic.woff2') format('woff2'),
      url('./fonts/MaisonNeueWEB-BoldItalic.woff') format('woff'),
      url('./fonts/MaisonNeueWEB-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  .App {
    text-align: center;
  }
  .App-logo {
    height: 10vmin;
    margin-top: 300px;
    pointer-events: none;
  }
`;

export default baseStyles;
