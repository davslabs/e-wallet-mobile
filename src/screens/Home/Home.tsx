import { useCreditCards } from '../../hooks/useCreditCards';
import { useMovements } from '../../hooks/useMovements';
import { Center, Box, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CardsModule from './modules';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';
import MovementsModule from './modules/MovementsModule';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },

  ActionButton: {
    width: 50,
    height: 50,
  },
});

const Home = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const { movements } = useMovements();
  const { signOut, auth } = useAuth();

  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };

  const goToMyMovements = () => {
    navigation.navigate('Movements', { movements });
  };
  
  const goToMyPayments = () => {
    navigation.navigate('Payment');
  }

  const goToMyTicket = () => {
    navigation.navigate('Ticket');
  }

  return (
    <Center style={styles.container}>
      {cards ? <CardsModule cards={cards} handlePress={goToMyCards} /> : <Splash />}
      {movements ? <MovementsModule movements={movements} handlePress={goToMyMovements} />: <Splash />}
      <VStack maxWidth={400} minWidth={100}>
      <Box style={styles.container}>
      <ActionButton handlePress={goToMyPayments} text={`Realizar Pagos`}/> 
      </Box>
      <Box style={styles.container}>
      <ActionButton handlePress={goToMyTicket} text={`Ticket`}/> 
      </Box>
      <Box style={styles.container}>
      <ActionButton handlePress={signOut} text={`Adios ${auth.email}`} />
      </Box>
      </VStack>
    </Center>
  );
};

export default Home;
