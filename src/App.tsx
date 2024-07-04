import { View } from 'react-native';
import { BottomNavigator } from './shared/components/bottomNavigator/BottomNavigator';
import { Container } from '@mui/material';
import { GridEstablishment } from './shared/components/establishment/GridEstablishment';

export default function App() {  
  return (
    <View style={{      
      width: '100%',
      backgroundColor: 'white',            
    }}>              
          
      <Container maxWidth="xl">        
          <GridEstablishment/>        
      </Container>
      
      
      <BottomNavigator/>
    </View>
  );
}