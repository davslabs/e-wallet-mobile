import { useCreditCards } from '../../hooks/useCreditCards';
import { useMovements } from '../../hooks/useMovements';
import { Center, Box } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import CardsModule from './modules';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';
import MovementsModule from './modules/MovementsModule';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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

  return (
    <Center style={styles.container}>
      {cards ? <CardsModule cards={cards} handlePress={goToMyCards} /> : <Splash />}
      {movements ? <MovementsModule movements={movements} handlePress={goToMyMovements} />: <Splash />}
      <ActionButton handlePress={signOut} text={`Adios ${auth.email}`} />
    </Center>
  );
};

export default Home;
