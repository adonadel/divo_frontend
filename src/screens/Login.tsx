import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { LightTheme } from '../shared/theme/LightTheme';

export interface ILogin {
  email: string;
  password: string;
}

export default function Login({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm<ILogin>();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: ILogin) => {
    try {
      await signIn(data);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/logo-divo.png')}
          resizeMode='contain'
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
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
                right={<TextInput.Icon icon='email' />}
                style={styles.input}
              />
            )}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

          <Controller
            control={control}
            name='password'
            rules={{ required: 'Senha é obrigatória' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Senha'
                mode='outlined'
                secureTextEntry={!showPassword}
                right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.input}
              />
            )}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

          <Button mode='contained' onPress={handleSubmit(onSubmit)} style={styles.button}>Entrar</Button>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Como você deseja se cadastrar?</Text>
            <View style={styles.buttonGroup}>
              <Button mode='contained' disabled onPress={() => navigation.navigate('RegisterEstablishment')} style={[styles.registerButton, { backgroundColor: LightTheme.colors.disabled }]}>Estabelecimento</Button>
              <Button mode='contained' onPress={() => navigation.navigate('RegisterUser')} style={styles.registerButton}>Usuário</Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: '50%',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    borderRadius: 8,
    marginTop: 20,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  registerButton: {
    width: '48%',
    borderRadius: 8,
    marginTop: 10,
  },
});
