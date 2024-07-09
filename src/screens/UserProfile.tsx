import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function UserProfile() {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <View style={
        {
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',

        }
      }>
        <Avatar.Image size={50} source={{ uri: 'https://picsum.photos/700' }} />
        <Text>Nome do usuário</Text>

      </View>

    </View>
  );
}