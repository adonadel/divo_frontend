import { ScrollView, View } from "react-native";
import { CardFavorites } from "./CardFavorites";


export const GridFavorites = () => {

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
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
             
            </View>
        </ScrollView>
    )

};