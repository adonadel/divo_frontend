import React from 'react';
import { Text, View } from 'react-native';
import CardEstablishment from '../shared/components/establishment/CardEstablishment';
import { GridEstablishment } from '../shared/components/establishment/GridEstablishment';

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
      
      <GridEstablishment />
    </View>
  );
}