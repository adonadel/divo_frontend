import React from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Home</Text>
    </View>
  );
}