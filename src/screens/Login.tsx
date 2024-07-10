import { Controller, useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAuth } from '../contexts/auth';

export interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<ILogin>();
  const { signIn } = useAuth();

  const onSubmit = async (data: ILogin) => {
    try {
      await signIn(data);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

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
        <Image
          src={('/assets/logo-divo.svg')}
        />
        <View style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
          <Controller
            control={control}
            name='email'
            rules={{ required: 'E-mail é obrigatório' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='E-mail'
                mode='outlined'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.email && <Text>{errors.email.message}</Text>}

          <Controller
            control={control}
            name='password'
            rules={{ required: 'Senha é obrigatória' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Senha'
                mode='outlined'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.password && <Text>{errors.password.message}</Text>}

          <Button mode='contained' onPress={handleSubmit(onSubmit)}>Entrar</Button>
        </View>
      </View>

    </View>
  );
}