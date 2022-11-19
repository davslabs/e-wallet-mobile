import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Box, Center, Heading, View, ScrollView } from 'native-base';
import { ActionButton, FormInput } from '../../../components/shared';
import Splash from '../../Splash';
import CardsModuleSlidable from './CardsModuleSlidable';
import useAuth from '../../../hooks/useAuth';
import { useCreditCards } from '../../../hooks/useCreditCards';


const PaymentFields = (navigation: any) => {
    const { cards } = useCreditCards();
    const { auth } = useAuth();
    const [destinatario, setDestinatario] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');

    const goToMyCards = () => {
      navigation.navigate('MyCards');
    };


    const styles = StyleSheet.create({
      title: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 30
      }
    });


    return (
      <ScrollView>
        <Heading style={styles.title} size="lg" fontWeight="semibold">Pagos</Heading>
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
                        value= {destinatario}
                        onChangeText={ setDestinatario }
                    />
                    <FormInput
                        label="Motivo"
                        placeholder="Expensas/Haberes/Varios"
                        keyboardType="default"
                        value={ descripcion }
                        onChangeText={ setDescripcion }
                    />
                    <FormInput
                        label="Monto"
                        placeholder="Monto $$$"
                        keyboardType="number-pad"
                        value={ monto }
                        onChangeText={ setMonto }
                    />
                </VStack>
                </Box>
                </Center>
                  <Box>
                  {cards ? <CardsModuleSlidable cards={cards} handlePress={goToMyCards} /> : <Splash />}
                  </Box>
 
      
      </ScrollView>)
};

export default PaymentFields;