import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/Favorites";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Promotions from "../screens/Promotions";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name="login" color={color} size={size} />,
                    tabBarLabel: 'Login'
                }}
            />
            <Tab.Screen
                name="Promotions"
                component={Promotions}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name="price-tag" size={size} color={color} />,
                    tabBarLabel: 'Promoções'
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
                    tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name="heart" color={color} size={size} />,
                    tabBarLabel: 'Favoritos'
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name="magnifying-glass" color={color} size={size} />,
                    tabBarLabel: 'Buscar'
                }}
            />
        </Tab.Navigator>
    )
}