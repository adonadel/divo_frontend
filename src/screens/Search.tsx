import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { EstablishmentType } from '../shared/components/establishment/EstablishmentType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CardEstablishment from '../shared/components/establishment/CardEstablishment';
import { LightTheme } from '../shared/theme/LightTheme';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<EstablishmentType[]>([]);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@DIVOAuth:token');
      try {
        const response = await axios.get(`${apiUrl}/api/establishments/?no-paginate=true&search=${searchQuery}`, {
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
    
    if (searchQuery.length > 2){
      fetchData();
    }

  }, [searchQuery]);

  return (
    <PaperProvider theme={LightTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Searchbar
            style={
              {
                width: '95%',                
                margin: 10
              }
            }
            placeholder="Nome do estabelecimento"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
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
              {data && data.map((item, index) => (
                <CardEstablishment {...item} key={index} />
              ))}

              {
                data.length == 0 &&
                <Text>
                  Faça sua busca, o resultado será apresentado aqui!
                </Text>
              }
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
