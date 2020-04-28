import React from 'react';
import { Global } from '@emotion/core'; // Include this import for global styles
import baseStyles from '../src/style/base'; // Include this to import the base project CSS

const logo = require('../src/logo.svg');

function App() {
  return (
    <div className="App">
      { /** Include this Global line for the base project styles in your new project. */}
      <Global styles={baseStyles} />
      <p>Project: react-scaffold</p>
      <p>
        PORT | {process.env.PORT}
        <br />
        NODE_ENV | {process.env.NODE_ENV}
        <br />
        MMLF_HOST | {process.env.REACT_APP_MMLF_HOST}
      </p>
    </div>
  );
}

export default App;
