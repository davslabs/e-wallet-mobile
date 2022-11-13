import { useCreditCards } from '../../hooks/useCreditCards';
import { usePayments } from 'hooks/usePayments';
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
  const { movements } = usePayments();
  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };
  const goToMyPayments = () => {
    navigation.navigate('Payments', { movements });
  }

  return (
    <Center style={styles.container}>
      <Box>
      {movements ? <PaymentFields movements={movements} handlePress={goToMyPayments}}/> : <Splash/>}
      </Box>
      <Box>
      {cards ? <CardsModuleSlidable cards={cards} handlePress={goToMyCards} /> : <Splash />}
      <ActionButton handlePress={auth} text={`Pagar ${auth.email}`} />
      </Box>
    </Center>
  );
};

export default Payment;