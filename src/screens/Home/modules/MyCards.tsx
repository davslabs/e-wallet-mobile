import React from 'react';
import { CreditCard } from '../../../components/shared';
import { Box, ZStack } from 'native-base';

const MyCards = () => {
  return (
    <ZStack mt={10} ml={10}>
      <Box ml="10">
        <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="#DAA520" type="visa" />
      </Box>
      <Box ml="5">
        <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="blue" type="mastercard" />
      </Box>
      <Box>
        <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="grey" type="mastercard" />
      </Box>
    </ZStack>
  );
};

export default MyCards;
