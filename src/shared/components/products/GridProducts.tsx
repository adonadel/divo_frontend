import { View } from "react-native"
import { CardProducts } from "./CardProducts"


export const GridProducts: React.FC = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            padding: 10,
        
        }}>
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
        </View>
    )
}