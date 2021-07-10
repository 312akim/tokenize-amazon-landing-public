import './App.css';
import MainComponent from './components/presentational/Main/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/design/theme.js'
import { GlobalStyles } from './shared/design/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainComponent />
      </>
    </ThemeProvider>
  );
}

export default App;
