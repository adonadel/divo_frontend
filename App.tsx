import { View } from 'react-native';
import { Container } from '@mui/material';
import { GridEstablishment } from './src/shared/components/establishment/GridEstablishment';
import { BottomNavigator } from './src/shared/components/bottomNavigator/BottomNavigator';


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