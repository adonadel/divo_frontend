import React from 'react';
import { View } from 'react-native';
import { GridEstablishment } from '../shared/components/establishment/GridEstablishment';

export default function Search() {  

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