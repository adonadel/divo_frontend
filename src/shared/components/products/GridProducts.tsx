import { View } from "react-native"
import { CardProducts } from "./CardProducts"
import { useEffect, useState } from "react"
import { EstablishmentType } from "../establishment/EstablishmentType"
import axios from "axios"
import { ProductsType } from "./ProductsType"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const GridProducts: React.FC = () => {

    const [data, setData] = useState<ProductsType[]>([]);        


    const establishmentId = 1;

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('@DIVOAuth:token');
            try {
                const response = await axios.get('http://192.168.0.158:8080/api/establishments/1/products', {
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