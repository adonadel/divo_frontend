import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { ILogin } from '../screens/Login';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(data: ILogin): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@DIVOAuth:user');
      const storagedToken = await AsyncStorage.getItem('@DIVOAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(data: ILogin): Promise<void> {
    setLoading(true);
    try {
      const response = await auth.signIn(data);
      console.log('response:', response);
      setUser(data);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem('@DIVOAuth:user', JSON.stringify(data.email));
      await AsyncStorage.setItem('@DIVOAuth:token', response.data.token);
    } catch (error) {
      console.error('Error during sign-in:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function signOut(): Promise<void> {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };

