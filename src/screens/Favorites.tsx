import { Text, View } from 'react-native';
import { CardFavorites } from '../shared/components/favorites/CardFavorites';
import { GridFavorites } from '../shared/components/favorites/GridFavorites';

export default function Favorites() {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <GridFavorites />
    </View>
  );
}