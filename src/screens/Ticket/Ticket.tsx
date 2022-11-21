import React, { useState } from 'react';
import { Center, Box, ScrollView, Fab, Icon, HStack, Button, VStack, Text, Heading } from 'native-base';
import { Pressable, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { ActionButton, MiniCreditCard } from '../../components';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  ticket: {
    marginTop: 30,
    padding: 24,
    paddingTop: 10,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#E18D51',
    borderWidth: 5,
    width: 350,
    height: 160,
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    marginVertical: -10,
    justifyContent: 'space-between',
  },
  fixToText: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  card: {
    padding: 50,
  },
});

const Ticket = ({ navigation }: any) => {
  const goToMyHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Center style={styles.container}>
      <Pressable>
        <VStack shadow={10} style={[styles.ticket, { backgroundColor: '#EDBA96', opacity: 0.3, padding: 10 }]}>
          <Heading style={[styles.title, { padding: 10 }]}>Pago N°#</Heading>
          <Text style={styles.fixToText}>Motivo: </Text>
          <Text style={styles.fixToText}>Monto: </Text>
        </VStack>
      </Pressable>

      <Center>
        <Box style={styles.card}>
          <MiniCreditCard cardHolder="Leonel Messi" cardSuffix="3456" bgColor="#383737" type="VISA" />
        </Box>
      </Center>

      <VStack>
        <Box style={styles.separator}>
          <ActionButton handlePress={goToMyHome} text={`Aceptar`} />
        </Box>
      </VStack>
    </Center>
  );
};

export default Ticket;
