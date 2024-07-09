import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Button, Text, Card, Chip, IconButton, useTheme } from 'react-native-paper';

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

  return (
    <ScrollView>
      <Card style={styles.card}>
        <View style={styles.profile}>
          <Avatar.Image style={styles.avatar} size={90} source={{ uri: 'https://picsum.photos/700' }} />
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
            fontSize: 20,
            fontWeight: 'bold',
          }}>Bar do zé</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'gray'
          }} variant="bodyMedium">Aberto de 12h - 21h</Text>

          <Chip style={{
            marginTop: 10,
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: useTheme().colors.tertiary,
            }} variant='bodyMedium'>
              650, R. Des. Pedro Silva - Comerciario, Criciúma - SC, 88802-300
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
      }}>
        <Text variant="titleLarge" style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>Produtos</Text>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: 'gray'
        }} variant="bodyMedium">Catálogo de produtos</Text>
      </View>
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />

    </ScrollView>
  );
}