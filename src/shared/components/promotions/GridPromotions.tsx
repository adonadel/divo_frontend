import { ScrollView, View } from "react-native";
import { CardPromotions } from "./CardPromotions";



export const GridPromotions = () => {

    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
                padding: 20
            }}>
                <CardPromotions />
                <CardPromotions />
                <CardPromotions />
                <CardPromotions />
                <CardPromotions />
                <CardPromotions />
            </View>
        </ScrollView>
    )

};