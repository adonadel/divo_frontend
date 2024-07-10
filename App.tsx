import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import { LightTheme } from './src/shared/theme/LightTheme';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (  
    <PaperProvider theme={LightTheme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}