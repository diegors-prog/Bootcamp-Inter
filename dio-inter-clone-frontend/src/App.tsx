import { ThemeProvider } from 'styled-components';

import Router from './routes';
import {theme} from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import { AuthProbider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProbider>
        <GlobalStyle />
        <Router />
      </AuthProbider>
    </ThemeProvider>
  );
}

export default App;
