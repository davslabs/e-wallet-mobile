import { useCreditCards } from '../../hooks/useCreditCards';
import { Center, Box } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import CardsModuleSlidable from './modules';
import PaymentFields from './modules/PaymentFields';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const Payment = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const { auth } = useAuth();
  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };

  return (
    <Center style={styles.container}>
      {cards ? <CardsModuleSlidable cards={cards} handlePress={goToMyCards} /> : <Splash />}
      <ActionButton handlePress={auth} text={`Pagar ${auth.email}`} />
    </Center>
  );
};

export default Payment;