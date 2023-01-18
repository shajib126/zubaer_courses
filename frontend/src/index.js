import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client';
import App from './App';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
    </ChakraProvider>
  </StrictMode>
);

