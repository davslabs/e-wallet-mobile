import { Center, Box, ScrollView, View } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react';
import PaymentFields from './modules/PaymentFields';
import { ActionButton } from '../../components';

const Payment = ({navigation}:any) => {
  const goToMyTicket = () => {
    navigation.navigate('Ticket');
  };
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '600',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginHorizontal: 50,
      marginTop:20
    },
  });


  return (
    <Center>
      <ScrollView>
        <Box>
          <PaymentFields />
        </Box>
        <View style={styles.buttonContainer}>
          <ActionButton handlePress={goToMyTicket} text={`Confirmar Pago`} />
        </View>
      </ScrollView>
    </Center>
  );
};

export default Payment;
