import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Login() {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
      }}>
        <img src='/assets/logo-divo.svg' />
        <View style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,          
        }}>
          <TextInput
            label="E-mail"
            mode='outlined'
          />
          <TextInput
            label="Senha"
            secureTextEntry
            mode='outlined'
          />
        </View>
      </View>

    </View>
  );
}