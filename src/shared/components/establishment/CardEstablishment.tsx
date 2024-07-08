import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Chip, IconButton, Text, TextInput } from 'react-native-paper';

const CardEstablishment: React.FC = () => {    

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
            borderRadius: 100,
            bottom: -15,
            zIndex: 1
        }
    })

    return (
        <Card style={styles.card}>
            <View style={styles.profile}>
                <Avatar.Image style={styles.avatar} size={60} source={{ uri: 'https://picsum.photos/700' }} />
                <Chip style={styles.iconChip} icon="star">
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                    }} variant='bodyMedium'>4.2</Text>
                </Chip>
            </View>

            <IconButton
                style={styles.iconButton}
                icon="heart-outline"
                mode='contained'
                size={20}
                onPress={() => console.log('Pressed')}
            />

            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content style={styles.cardContent}>
                <Text variant="titleLarge" style={{
                    fontSize: 15,
                    fontWeight: 'bold',                    
                }}>Bar do zé</Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray'                
                }} variant="bodyMedium">Aberto de 12h - 21h</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button style={styles.cardButton}>
                    Conhecer
                </Button>
            </Card.Actions>
        </Card>

    );
};

export default CardEstablishment;