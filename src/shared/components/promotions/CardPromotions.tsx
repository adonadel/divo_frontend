import { Image, StyleSheet, View } from "react-native"
import { Avatar, Button, Card, Chip, Divider, IconButton, Text } from "react-native-paper"
import CardTitle from "react-native-paper/lib/typescript/components/Card/CardTitle";


export const CardPromotions = () => {
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
        },
        cardDescription: {
            marginTop: 10,
            fontSize: 15,
        },

        cardTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10
        }

    })
    return (
        <>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15
                    }}>
                        <Avatar.Image source={{ uri: 'https://picsum.photos/200' }} size={60} style={styles.avatar} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            gap: 5,
                            alignItems: 'flex-start',
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                            }}>Restaurante do Alamar</Text>
                            <Chip style={{
                                backgroundColor: 'white',


                                borderRadius: 100,
                                zIndex: 1
                            }} icon="star">
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                }} variant='bodyMedium'>4.2</Text>
                            </Chip>
                        </View>
                    </View>
                    <Divider style={{
                        marginTop: 15,
                        marginBottom: 10

                    }} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>50% de desconto!</Text>
                        <Card.Cover source={{ uri: 'https://kalejunkie.com/wp-content/uploads/2023/12/KJ_Beef-Tenderloin-6-1638x2048.jpg' }} />
                        <Text style={styles.cardDescription}>O melhor prato da região com 50% de desconto. de 59,90 para 29,90 reais.</Text>
                    </View>
                    <View>
                        <Card.Actions style={styles.cardActions}>
                            <Button mode="contained" style={styles.cardButton}>
                                Conhecer
                            </Button>
                        </Card.Actions>
                    </View>
                </Card.Content>
            </Card>
        </>
    );
}