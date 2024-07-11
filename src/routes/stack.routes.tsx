import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import RegisterEstablishment from "../screens/RegisterEstablishment";
import RegisterUser from "../screens/RegisterUser";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="RegisterEstablishment"
                component={RegisterEstablishment}
            />
            <Stack.Screen
                name="RegisterUser"
                component={RegisterUser}
            />
        </Stack.Navigator>
    )
}