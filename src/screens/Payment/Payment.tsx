import { VStack, Box, Center, Heading, View, ScrollView, Text, useToast } from 'native-base';
import { Pressable, StyleSheet, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { CreditCard, ActionButton, FormInput } from '../../components';
import { NewMovement } from '../../types/NewMovement';
import { useCreditCards } from '../../hooks/useCreditCards';
import CategoryMap from '../../components/shared/CreditCard/utils/category-map';
import { useMovements } from '../../hooks/useMovements';

const Payment = ({ navigation }: any) => {
  const { creditCards } = useCreditCards();
  const [destinatario, setDestinatario] = useState('');
  const [motivo, setMotivo] = useState('');
  const [monto, setMonto] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const flatListRef = useRef() as any;
  const { addMovement } = useMovements();
  const toast = useToast();

  const goToMyTicket = (movement: NewMovement) => {
    navigation.navigate('Ticket', movement);
  };

  useEffect(() => {
    if (creditCards && creditCards.length && creditCards.length > 0) setTarjeta(creditCards[0].id);
  }, [creditCards]);

  const styles = StyleSheet.create({
    title: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: '200',
      marginLeft: 35,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginHorizontal: 50,
      marginTop: 20,
    },
  });

  let viewabilityConfig = {
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 95,
    itemVisiblePercentThreshold: 30,
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  const defaultValue = () => {
    setDestinatario(''), setMonto(''), setMotivo('');
  };
  interface ValidationResult {
    success: boolean;
    message: string;
  }

  const validatePaymentData = (pay: NewMovement): ValidationResult => {
    const CreditCardRegex = '^[0-9]{10,18}$';
    const CVVRegex = '^[0-9]{3,4}$';
    let result: ValidationResult = { message: '', success: true };
    if (pay.destinatario.length < 5) result = { message: 'Ingrese un Alias o CVU válido', success: false };
    if (!pay.descripcion) result = { message: 'Ingrese el motivo del pago', success: false };
    if (!pay.monto || pay.monto <= 0) result = { message: 'El monto ingresado no es válido', success: false };
    if (!pay.tarjeta) result = { message: 'Seleccione una tarjeta para realizar el pago', success: false };
    return result;
  };

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
              onChangeText={setMonto}
            />
          </VStack>
        </Box>
      </Center>
      <Box>
        <Text style={styles.title}>Tarjetas</Text>
      </Box>
      <Center>
        <FlatList
          data={creditCards}
          viewabilityConfig={viewabilityConfig}
          ref={flatListRef}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ marginTop: 10, marginLeft: 35, marginRight: 20 }}
              onPressIn={() => {
                scrollToIndex(index);
                setTarjeta(item.id);
              }}
            >
              <CreditCard
                cardHolder={item.titular}
                dueDate={item.fechaVencimiento}
                cardSuffix={item.suffix}
                bgColor={CategoryMap[item.categoria]}
                type={item.tipo}
              />
            </Pressable>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
        />
      </Center>

      <View style={styles.buttonContainer}>
        <ActionButton
          text="Confirmar Pago"
          handlePress={async () => {
            const newMovement: NewMovement = {
              destinatario: destinatario,
              descripcion: motivo,
              monto: parseInt(monto, 10),
              tarjeta: tarjeta,
            };
            let result: ValidationResult = validatePaymentData(newMovement);
            if (result.success) {
              const paymentResponse = await addMovement(newMovement);
              if (paymentResponse) {
                defaultValue();
                goToMyTicket(paymentResponse);
              } else {
                result = {
                  success: false,
                  message: 'Error al realizar el pago',
                };
              }
            }
            if (!result.success) {
              toast.show({
                description: result.message,
                placement: 'top',
              });
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Payment;
