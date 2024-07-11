import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Text, Card, Chip, IconButton, useTheme } from 'react-native-paper';
import { GridProducts } from '../shared/components/products/GridProducts';
import React, { useEffect, useState } from 'react';
import { EstablishmentType } from '../shared/components/establishment/EstablishmentType';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EstablishmentProfile() {
  const styles = StyleSheet.create({
    card: {
      width: '100%',
      position: 'relative',
      shadowColor: 'transparent',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 40,
      marginBottom: 10,
      marginLeft: 10,
    },
    cardActions: {
      display: 'flex',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardButton: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardCover: {
      width: '100%',
      height: 200,
    },

    avatar: {
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 48,
      borderRadius: 100,
      zIndex: 1
    },

    iconButton: {
      position: 'absolute',
      backgroundColor: 'white',
      top: 140,
      right: 20,
      zIndex: 1
    },

    profile: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      top: 120,
      left: 15,
      zIndex: 1
    },

    iconChip: {
      transform: [{ scale: 0.8 }],
      position: 'absolute',
      backgroundColor: 'white',
      borderColor: 'grey',
      borderRadius: 100,
      bottom: -15,
      zIndex: 1
    },

    imageGrid: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: 20,

    },

    image: {
      width: '100%',
      height: 230,
      borderRadius: 10,
    }
  })

  const [data, setData] = useState<EstablishmentType>();


  const [isFavorited, setIsFavorited] = React.useState(data?.is_favorited);
  const id = 1;


  const toggleFavorite = () => {

    const toggleFavoriteEstablishment = async (state: boolean) => {
      try {
        const token = await AsyncStorage.getItem('@DIVOAuth:token');
        await axios.put(`http://192.168.0.158:8080/api/establishments/${id}/${state ? 'favorite' : 'unfavorite'}/1`, [], {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      } catch (error) {
        console.error("Erro ao salvar item:", error);
      }
    }

    if (isFavorited) {
      toggleFavoriteEstablishment(false);
      setIsFavorited(false);
    } else {
      toggleFavoriteEstablishment(true);
      setIsFavorited(true);
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@DIVOAuth:token');
      try {
        const response = await axios.get('http://192.168.0.158:8080/api/establishments/1', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = response.data;
        setData(data);
        setIsFavorited(data.is_favorited);
      } catch (error) {
        console.error("Erro ao buscar estabelecimento:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <Card style={styles.card}>
        <View style={styles.profile}>
          <Avatar.Image style={styles.avatar} size={90} source={{ uri: 'https://picsum.photos/700' }} />
          <Chip style={styles.iconChip} icon="star">
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',

            }} variant='bodyMedium'>{data?.overall_rating.toFixed(1)}</Text>
          </Chip>
        </View>

        <IconButton
          style={styles.iconButton}
          icon={
            isFavorited ? 'heart' : 'heart-outline'
          }
          mode='contained'
          size={20}
          onPress={toggleFavorite}
        />

        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>{data?.name}</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'gray'
          }} variant="bodyMedium">Aberto de {data?.opening_start.slice(0, 5)} - {data?.opening_close.slice(0, 5)}</Text>

          <Chip style={{
            marginTop: 10,
            backgroundColor: useTheme().colors.primary,
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: 'normal',
              color: 'white',
            }} variant='bodyMedium'>
              {data?.address?.street}, {data?.address?.number} - {data?.address?.neighborhood}, {data?.address?.city} - {data?.address?.state}, {data?.address?.zip}
            </Text>
          </Chip>
        </Card.Content>

        <ScrollView contentContainerStyle={styles.imageGrid}>
          <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
          <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
          <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
        </ScrollView>
      </Card>

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        marginTop: 30,
        marginBottom: 10,
      }}>
        <Text variant="titleLarge" style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: useTheme().colors.primary
        }}>Produtos</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: 'normal',
          color: 'gray'
        }} variant="bodyMedium">Catálogo de produtos</Text>
      </View>

      <GridProducts />

    </ScrollView>
  );
}