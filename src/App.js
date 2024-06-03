import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';

function App() {
  return <>


    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      App File
    </ThemeProvider>



  </>
}

export default App;
