import { useCreditCards } from '../../hooks/useCreditCards';
import { Center, Box } from 'native-base';
import React from 'react';
import PaymentFields from './modules/PaymentFields';
import { ActionButton } from '../../components';

const Payment = () => {

  const goToMyTicket = (navigation: any) => {
    navigation.navigate('Ticket');
  }

  return (
    <Center>

      <Box>
      <PaymentFields />
      </Box>
      <Box>
        <ActionButton handlePress={goToMyTicket} text={`Pagar`}/> 
      </Box>
    </Center>
  );
};

export default Payment;