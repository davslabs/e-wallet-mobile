import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Box, Center, Heading, ScrollView } from 'native-base';
import { FormInput } from '../../../components/shared';
import Splash from '../../Splash';
import CardsModuleSlidable from './CardsModuleSlidable';
import { useCreditCards } from '../../../hooks/useCreditCards';

const PaymentFields = (navigation: any) => {
  const { creditCards } = useCreditCards();
  const [destinatario, setDestinatario] = useState('');
  const [motivo, setMotivo] = useState('');
  const [monto, setMonto] = useState('');

  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };

  const styles = StyleSheet.create({
    title: {
      marginTop: 30,
      fontSize: 20,
      fontWeight: '200',
      marginLeft: 30,
    },
  });

  return (
    <ScrollView>
      <Heading style={styles.title} size="lg" fontWeight="semibold">
        Pagos
      </Heading>
      <Center>
        <Box safeArea p="2" maxW={['90%', '90%', '50%']} minW="290" justifyContent="center">
          <Heading mt="1" fontWeight="medium" size="xs">
            Por favor, complete los siguientes datos
          </Heading>
          <VStack space={3} mt="5">
            <FormInput
              label="Destinatario"
              placeholder="Alias/CVU"
              keyboardType="default"
              value={destinatario}
              helpText="Debe ingresar un destinatario"
              onChangeText={setDestinatario}
            />

            <FormInput
              label="Motivo"
              placeholder="Expensas/Haberes/Varios"
              keyboardType="default"
              value={motivo}
              onChangeText={setMotivo}
            />

            <FormInput
              label="Monto"
              placeholder="Monto $$$"
              keyboardType="number-pad"
              value={monto}
              helpText="Monto invalido."
              onChangeText={setMonto}
            />
          </VStack>
        </Box>
      </Center>
      <Box>{creditCards ? <CardsModuleSlidable cards={creditCards} handlePress={goToMyCards} /> : <Splash />}</Box>
    </ScrollView>
  );
};

export default PaymentFields;
