import { View } from "react-native"
import { CardProducts } from "./CardProducts"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProductsType } from "./ProductsType"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const GridProducts: React.FC = () => {

    const [data, setData] = useState<ProductsType[]>([]);        
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;    

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('@DIVOAuth:token');
            try {
                const response = await axios.get(`${apiUrl}/api/establishments/1/products`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                const data = response.data;                
                setData(data);                    
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        
        fetchData();            
    }, []);


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

            {
                data.map((product, index) => {
                    return (
                        <CardProducts
                            key={index}
                            {...product}
                        />
                    )
                })
            }
   
        </View>
    )
}