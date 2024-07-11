import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Chip, IconButton, Text } from 'react-native-paper';
import { EstablishmentType } from './EstablishmentType';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardEstablishment = (props: EstablishmentType) => {

    const styles = StyleSheet.create({
        card: {
            width: '100%',
            position: 'relative',
            backgroundColor: 'white',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
            fontSize: 20,
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
            height: 120,
        },

        avatar: {
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 32,
            borderRadius: 100,
            zIndex: 1
        },

        iconButton: {
            position: 'absolute',
            backgroundColor: 'white',
            top: 10,
            right: 10,
            zIndex: 1
        },

        profile: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            top: 25,
            left: 15,
            zIndex: 1
        },

        iconChip: {
            transform: [{ scale: 0.8 }],
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: 100,
            bottom: -15,
            zIndex: 1
        }
    })


    const [isFavorited, setIsFavorited] = React.useState(props.is_favorited);
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;


    const toggleFavorite = () => {

        const toggleFavoriteEstablishment = async (state: boolean) => {
            try {
                const token = await AsyncStorage.getItem('@DIVOAuth:token');
                await axios.put(`${apiUrl}/api/establishments/${props.id}/${state ? 'favorite' : 'unfavorite'}/1`, [], {
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

    return (
        <Card style={styles.card}>
            <View style={styles.profile}>
                {
                    props.medias &&
                    <Avatar.Image style={styles.avatar} size={60} source={{ uri: props.medias[0]?.fileName ? props.medias[0]?.fileName : 'https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg' }} />
                }

                {
                    !props.medias &&
                    <Avatar.Image style={styles.avatar} size={60} source={{ uri: 'https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg' }} />
                }
                <Chip style={styles.iconChip} icon="star">
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                    }} variant='bodyMedium'>{props.overall_rating?.toFixed(1)}</Text>
                </Chip>
            </View>

            <IconButton
                style={styles.iconButton}
                icon={isFavorited ? 'heart' : 'heart-outline'}
                mode='contained'
                size={20}
                onPress={toggleFavorite}
            />

            {
                props.medias &&
                <Card.Cover style={styles.cardCover} source={{ uri: props.medias[1]?.fileName ? props.medias[1]?.fileName : 'https://veja.abril.com.br/wp-content/uploads/2018/02/mclanche-feliz.jpg?quality=90&strip=info&w=720&h=440&crop=1' }} />
            }

            {
                !props.medias &&
                <Card.Cover style={styles.cardCover} source={{ uri: 'https://veja.abril.com.br/wp-content/uploads/2018/02/mclanche-feliz.jpg?quality=90&strip=info&w=720&h=440&crop=1' }} />
            }

            <Card.Content style={styles.cardContent}>
                <Text variant="titleLarge" style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                }}>{props.name}</Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray'
                }} variant="bodyMedium">Aberto de {props.opening_start.slice(0,5)} - {props.opening_close.slice(0,5)}</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button mode="contained" style={styles.cardButton}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Abrir perfil</Text>
                </Button>
            </Card.Actions>
        </Card>
    );
};

export default CardEstablishment;