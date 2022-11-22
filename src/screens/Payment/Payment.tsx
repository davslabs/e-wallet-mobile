import { VStack, Box, Center, Heading, View, ScrollView, Text } from 'native-base';
import { Pressable, StyleSheet, FlatList, Alert } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { CreditCard } from './../../components/shared';
import { ActionButton } from '../../components';
import { FormInput } from './../../components/shared';
import { NewMovement } from './../../types/NewMovement';
import { useCreditCards } from './../../hooks/useCreditCards';
import CategoryMap from './../../components/shared/CreditCard/utils/category-map';
import { useMovements } from './../../hooks/useMovements';

const Payment = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  let [destinatario, setDestinatario] = useState('');
  let [motivo, setMotivo] = useState('');
  let [monto, setMonto] = useState(Number);
  const [tarjeta, setTarjeta] = useState('');
  const flatListRef = useRef() as any;
  const { addMovement } = useMovements();

  const goToMyTicket = (movement: NewMovement) => {
    navigation.navigate('Ticket', movement);
  };

  useEffect(() => {
    if (cards && cards.length && cards.length > 0) setTarjeta(cards[0].id);
  }, [cards]);

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
    setDestinatario(''), setMonto(Number), setMotivo('');
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
              value={monto.toString()}
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
          data={cards}
          viewabilityConfig={viewabilityConfig}
          ref={flatListRef}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ marginTop: 10, marginLeft: 35, marginRight:20 }}
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
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </Center>

      <View style={styles.buttonContainer}>
        <ActionButton
          text={`Confirmar Pago`}
          handlePress={async () => {
            const newMovement: NewMovement = { descripcion: motivo, monto: monto, tarjeta, fechaHora: new Date() };

            if (!newMovement.monto || newMovement.monto < 0 || !newMovement.descripcion || !destinatario) {
              Alert.alert('Campos incompletos', 'Por favor complete los campos vacios', [{ text: 'OK' }]);
            } else {
              const paymentResponse = await addMovement(newMovement);
              defaultValue();
              goToMyTicket(paymentResponse);
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Payment;
