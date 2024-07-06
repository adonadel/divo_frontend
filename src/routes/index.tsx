import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { DarkTheme } from "../shared/theme/DarkTheme";
import { LightTheme } from "../shared/theme/LightTheme";
import TabRoutes from "./tab.routes";

export default function Routes() {
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <TabRoutes />
        </NavigationContainer>
    )
}