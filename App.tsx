import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import { DarkTheme } from './src/shared/theme/DarkTheme';
import { LightTheme } from './src/shared/theme/LightTheme';

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}