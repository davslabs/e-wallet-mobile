import { EmptyCreditCard, FormInput, MiniCreditCard } from '../../components';
import React, { useState } from 'react';
import { Center, Box, ScrollView, Fab, Icon, HStack, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const MyCards = ({ navigation }: any) => {
  const [fecha, setFecha] = useState('');
  return (
    <Center style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Center>
          <Box>
            <MiniCreditCard cardHolder="John Doe" cardSuffix="3456" bgColor="#DAA520" type="visa" />
          </Box>
          <Box mt={5}>
            <MiniCreditCard cardHolder="John Doe" cardSuffix="1234" bgColor="blue" type="mastercard" />
          </Box>
          <Box mt={5}>
            <MiniCreditCard cardHolder="John Doe" cardSuffix="1234" bgColor="red" type="mastercard" />
          </Box>
          <Box mt={5}>
            <MiniCreditCard cardHolder="John Doe" cardSuffix="1234" bgColor="gold" type="mastercard" />
          </Box>
          <Box mt={5}>
            <MiniCreditCard cardHolder="John Doe" cardSuffix="1234" bgColor="teal" type="mastercard" />
          </Box>
        </Center>
      </ScrollView>
    </Center>
  );
};

export default MyCards;
