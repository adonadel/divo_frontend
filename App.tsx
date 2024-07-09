import { PaperProvider } from 'react-native-paper';
import Routes from './src/routes';
import { LightTheme } from './src/shared/theme/LightTheme';

export default function App() {
  return (  
    <PaperProvider theme={LightTheme}>
      <Routes />
    </PaperProvider>
  );
}