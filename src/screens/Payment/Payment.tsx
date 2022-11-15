import { useCreditCards } from '../../hooks/useCreditCards';
import { usePayments } from '../../hooks/usePayments';
import { Center, Box } from 'native-base';
import React, { useEffect } from 'react';
import CardsModuleSlidable from './modules';
import PaymentFields from './modules/PaymentFields';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';
import { useMovements } from 'hooks/useMovements';



const Payment = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const { auth } = useAuth();
  const { movements } = useMovements();

  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };
  const goToMyPayments = () => {
    navigation.navigate('Payments');
  }

  return (
    <Center>
      <Box>
      <PaymentFields/>
      </Box>
      <Box>
      {cards ? <CardsModuleSlidable cards={cards} handlePress={goToMyCards} /> : <Splash />}
      <ActionButton handlePress={auth} text={`Pagar`} />
      </Box>
    </Center>
  );
};

export default Payment;