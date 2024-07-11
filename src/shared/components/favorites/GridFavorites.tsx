import { ScrollView, View } from "react-native";
import CardEstablishment from "../establishment/CardEstablishment";
import { useEffect, useState } from "react";
import { EstablishmentType } from "../establishment/EstablishmentType";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GridFavorites = () => {

    const [data, setData] = useState<EstablishmentType[]>([]);        

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('@DIVOAuth:token');
            try {
                const response = await axios.get('http://192.168.0.158:8080/api/establishments/1/favorites', {
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
                data && data.map((item, index) =>                     
                    <CardEstablishment {...item} is_favorited={true} key={index}/>
                )
            }    

            </View>
        </ScrollView>
    )
};