import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/Home';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function App() {
  const theme = extendTheme({
    breakpoints: {
      sm: '30em',
      md: '850px',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
  });

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <LandingPage/>
      </ChakraProvider>
    </div>
  );
}

export default App;
