import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import { LightTheme } from './src/shared/theme/LightTheme';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}