import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useAuth } from "../contexts/auth";
import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        <View>
            <ActivityIndicator size="large" />
        </View>
    }

    return (
        (signed ?
            <TabRoutes />
            :
            <StackRoutes />
        )
    )
}

export default Routes;