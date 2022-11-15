import React, { useState } from 'react';
import { VStack, Box, Center, Heading } from 'native-base';
import { FormInput } from '../../../components/shared';

const PaymentFields = () => {
    const [destinatario, setDestinatario] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    return (
      <Center >
        <Box safeArea p="2" maxW={['90%', '90%', '50%']} minW="290" justifyContent="center">
          <Heading size="lg" fontWeight="semibold">
            Pagos
          </Heading>
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
      </Center>)
};

export default PaymentFields;