import { ScrollView, View } from "react-native";
import { CardPromotions } from "./CardPromotions";
import { useEffect, useState } from "react";
import { ProductsType } from "../products/ProductsType";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GridPromotions = () => {
    const [data, setData] = useState<ProductsType[]>([]);
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;    

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('@DIVOAuth:token');
            try {
                const response = await axios.get(`${apiUrl}/api/products/promotions/all`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = response.data;
                setData(data);
            } catch (error) {
                console.error("Erro ao buscar promoções:", error);
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