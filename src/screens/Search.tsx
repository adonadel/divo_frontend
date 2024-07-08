import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { GridEstablishment } from '../shared/components/establishment/GridEstablishment';

export default function Search() {

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Searchbar
        style={{
          width: '90%',
          marginTop: 20,
          marginBottom: 10,
        }}
        placeholder="Pesquisar"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <GridEstablishment />

    </View>
  );
}