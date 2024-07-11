import { StyleSheet, View } from "react-native"
import { Avatar, Button, Card, Chip, Divider, Text, useTheme } from "react-native-paper"
import { ProductsType } from "../products/ProductsType";


export const CardPromotions = (props: ProductsType) => {
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
            color: useTheme().colors.primary,
            fontWeight: 'bold',
            marginBottom: 10
        }

    })
    
    return (   
        <Card style={styles.card}>
            <Card.Content>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15
                }}>
                    <Avatar.Image source={{ uri: props.establishment?.medias?.[0].fileName }} size={60} style={styles.avatar} />

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
                        }}>{props.establishment?.name}</Text>
                        <Chip style={{
                            backgroundColor: '#CC580325',
                            borderRadius: 100,
                            zIndex: 1
                        }} icon="star">
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                            }} variant='bodyMedium'>{props.establishment?.overall_rating.toFixed(1)}</Text>
                        </Chip>
                    </View>
                </View>
                <Divider style={{
                    marginTop: 15,
                    marginBottom: 10
                }} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{props.name}</Text>
                    <Card.Cover source={{ uri: props.imageSrc }} />
                    <Chip style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: 100,
                        right: 10,
                        top: 45,
                        zIndex: 1
                    }} icon="star" >{props.promotion?.percent}% de desconto</Chip>
                    <Text style={styles.cardDescription}>{props.description}</Text>
                </View>
                <View>
                    <Card.Actions style={styles.cardActions}>
                        <Button mode="contained" style={styles.cardButton}>
                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Conhecer {props.establishment?.name}</Text>
                        </Button>
                    </Card.Actions>
                </View>
            </Card.Content>
        </Card>
    );
}