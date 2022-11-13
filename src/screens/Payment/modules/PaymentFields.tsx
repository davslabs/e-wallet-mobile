import React, { useState } from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { CreditCard, EmptyCreditCard, PressableIcon, ActionButton, FormInput } from '../../../components/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { CreditCard as CreditCardType } from '../../../types/CreditCard';
import CategoryMap from '../../../components/shared/CreditCard/utils/category-map';
import { MiniMovement } from '../../../components/shared';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';
import CardsModuleSlidable from './CardsModuleSlidable';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  textButton: {
    fontSize: 16,
    fontWeight: '300',
  },
});

const PaymentFields = () => {
    const [destinatario, setDestinatario] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');

    return (
            <Box style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <VStack w="85%" space={4} alignItems="center">
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
            )};

export default PaymentFields;