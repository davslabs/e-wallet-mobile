import { useCreditCards } from '../../hooks/useCreditCards';
import { usePayments } from '../../hooks/usePayments';
import { Center, Box } from 'native-base';
import React from 'react';
import PaymentFields from './modules/PaymentFields';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';
import { useMovements } from '../../hooks/useMovements';



const Payment = () => {
  return (
    <Center>
      <Box>
      <PaymentFields /> : <Splash/>
      </Box>
    </Center>
  );
};

export default Payment;