import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Box, ChakraProvider } from "@chakra-ui/react"
import reportWebVitals from './reportWebVitals';
import { theme } from './Theme/theme';

ReactDOM.render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
      <Box bg="gray.200" minH="1000px">
        <App />
    </Box>
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
