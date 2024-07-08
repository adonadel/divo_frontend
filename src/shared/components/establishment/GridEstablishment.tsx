import { ScrollView, View } from "react-native";
import CardEstablishment from "./CardEstablishment";


export const GridEstablishment = () => {

    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                padding: 20
            }}>
                <CardEstablishment />
                <CardEstablishment />
                <CardEstablishment />
                <CardEstablishment />
                <CardEstablishment />
                <CardEstablishment />
            </View>
        </ScrollView>
    )

};