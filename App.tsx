import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { BottomNavigator } from './src/shared/components/bottomNavigator/BottomNavigator';
import { LoginScreen } from './src/screens/LoginScreen';
import { PromotionsScreen } from './src/screens/PromotionsScreen';
import { SearchScreen } from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Promotions" component={PromotionsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomNavigator />
    </>
  );
}