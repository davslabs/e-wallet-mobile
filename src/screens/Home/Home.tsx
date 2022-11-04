import { useCreditCards } from '../../hooks/useCreditCards';
import { Center, Box } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import CardsModule from './modules';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const Home = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const { signOut, auth } = useAuth();
  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };

  return (
    <Center style={styles.container}>
      {cards ? <CardsModule cards={cards} handlePress={goToMyCards} /> : <Splash />}
      <ActionButton handlePress={signOut} text={`Adios ${auth.email}`} />
    </Center>
  );
};

export default Home;
