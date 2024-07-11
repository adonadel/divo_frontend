import { ScrollView, View } from "react-native";
import { CardPromotions } from "./CardPromotions";
import { useEffect, useState } from "react";
import { ProductsType } from "../products/ProductsType";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GridPromotions = () => {
    const [data, setData] = useState<ProductsType[]>([]);        

    const establishmentId = 1;

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('@DIVOAuth:token');
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/establishments/1/products', {
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
                {
                    data.map((item, index) => (
                        <CardPromotions key={index} {...item} />
                    ))
                }

            </View>
        </ScrollView>
    )

};