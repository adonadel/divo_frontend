import React from 'react';
import { Button, View } from 'react-native';
import { GridEstablishment } from '../shared/components/establishment/GridEstablishment';
import { clearAsyncStorage } from '../shared/utils/AsyncStorage';

export default function Home() {
  const handleClearAsyncStorage = async () => {
    await clearAsyncStorage();
    // Additional logic after clearing AsyncStorage
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
      <Button title="Clear AsyncStorage" onPress={handleClearAsyncStorage} />
      <GridEstablishment />
    </View>
  );
}