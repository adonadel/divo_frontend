import { StyleSheet, View } from "react-native";
import { Card, Chip, Text } from "react-native-paper"
import { ProductsType } from "./ProductsType";

export const CardProducts = (props: ProductsType) => {   

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
            height: 200,
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

    return (
        <Card style={styles.card}>
                      
            <Card.Cover style={styles.cardCover} source={{ uri: props.imageSrc }} />
            
            {
                props.promotion &&
                <Chip style={{                
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderRadius: 100,
                    right: 10,
                    top: 15,
                    zIndex: 1            
                }} icon="star" >Promoção</Chip>
            }

            <Card.Content style={styles.cardContent}>

                <Text variant="titleLarge" style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>{props.name}</Text>
                
            </Card.Content>

            <View style={{
                width: '100%',
            }}>
                <Chip>
                    {
                        props.promotion &&
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: 'grey',
                            marginRight: 10,
                            textDecorationLine: 'line-through',
                        }}>
                           {
                            `R$ ${props.value.toFixed(2)}`
                           } 
                        </Text>

                    }
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#CC5803'
                    }}>
                        {
                            `R$ ${props.valueWithPromotion ? props.valueWithPromotion.toFixed(2) : props.value.toFixed(2)}`
                        }
                    </Text>
                </Chip>
            </View>
        </Card>

    );
}