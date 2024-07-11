import { ScrollView, View } from "react-native";
import CardEstablishment from "./CardEstablishment";
import { useEffect, useState } from "react";
import axios from "axios";
import { EstablishmentType } from "./EstablishmentType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GridEstablishment = () => {
    const [data, setData] = useState<EstablishmentType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('@DIVOAuth:token');
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/establishments', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = response.data;
                setData(data);
            } catch (error) {
                console.error("Erro ao buscar estabelecimentos:", error);
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
                    data &&
                    data.map((item, index) =>
                        <CardEstablishment {...item} key={index} />
                    )
                }

            </View>
        </ScrollView>
    )
};
