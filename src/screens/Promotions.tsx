import { View } from 'react-native';
import { GridPromotions } from '../shared/components/promotions/GridPromotions';

export default function Promotions() {  
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <GridPromotions />
    </View>
  );
}