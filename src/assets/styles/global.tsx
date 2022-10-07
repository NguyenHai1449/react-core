import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyles;
