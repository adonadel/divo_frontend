import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Chip, IconButton, Text } from 'react-native-paper';
import { EstablishmentType } from './EstablishmentType';

const CardEstablishment = (props : EstablishmentType) => {
    
    const styles = StyleSheet.create({
        card: {
            width: '100%',
            position: 'relative',
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

    const toggleFavorite = () => {
        console.log('Favorite');
    }

    return (
        <Card style={styles.card}>
            <View style={styles.profile}>
                <Avatar.Image style={styles.avatar} size={60} source={{ uri: props.profileSrc }} />
                <Chip style={styles.iconChip} icon="star">
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                    }} variant='bodyMedium'>{props.rating}</Text>
                </Chip>
            </View>

            <IconButton
                style={styles.iconButton}
                icon={props.favorite ? 'heart' : 'heart-outline'}
                mode='contained'
                size={20}
                onPress={toggleFavorite}
            />

            <Card.Cover style={styles.cardCover} source={{ uri: props.mediaSrc }} />
            <Card.Content style={styles.cardContent}>
                <Text variant="titleLarge" style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                }}>{props.name}</Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray'
                }} variant="bodyMedium">Aberto de {props.openHours}</Text>
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