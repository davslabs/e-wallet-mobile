import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { CreditCard, EmptyCreditCard, PressableIcon } from '../../../components/shared';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const CardsModule = () => {
  return (
    <VStack space={5}>
      <Box>
        <Text style={styles.title}>Mis tarjetas</Text>
      </Box>
      <HStack>
        <Box>
          <EmptyCreditCard
            handlePress={() => {
              console.log('Pressed');
            }}
          />
        </Box>
        {/* <Box> */}
        {/*  <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="#DAA520" type="visa" /> */}
        {/* </Box> */}
        {/* <Box ml={-280} mt={5}> */}
        {/*  <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="blue" type="mastercard" /> */}
        {/* </Box> */}
        {/* <Box ml={-270} mt={10}> */}
        {/*  <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="grey" type="mastercard" /> */}
        {/* </Box> */}
      </HStack>
      <HStack justifyContent="space-between">
        <Text style={styles.textButton}>Ver mis tarjetas</Text>
        <PressableIcon
          iconName="chevron-right"
          handlePress={() => {
            console.log('pressed');
          }}
          size={5}
          color="black"
        />
      </HStack>
    </VStack>
  );
};

export default CardsModule;
