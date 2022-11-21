import { VStack, Box, Center, Heading, View, ScrollView, Text } from 'native-base';
import { Pressable, StyleSheet, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { CreditCard } from './../../components/shared';
import { ActionButton } from '../../components';
import { FormInput } from './../../components/shared';
import { NewMovement } from './../../types/NewMovement';
import { useCreditCards } from './../../hooks/useCreditCards';
import useAuth from './../../hooks/useAuth';
import CategoryMap from './../../components/shared/CreditCard/utils/category-map';
import { useMovements } from './../../hooks/useMovements';

const Payment = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const [destinatario, setDestinatario] = useState('');
  const [motivo, setMotivo] = useState('');
  const [monto, setMonto] = useState(0);
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
      marginTop: 30,
      fontSize: 20,
      fontWeight: '200',
      marginLeft: 30,
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
              value={monto.toString()}
              helpText="Monto invalido."
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
              style={{ padding: 5, marginLeft: 20, marginRight: 20 }}
              onPress={() => {
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
          //onViewableItemsChanged = {onViewableItemsChanged}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </Center>

      <View style={styles.buttonContainer}>
        <ActionButton
          text={`Confirmar Pago`}
          handlePress={async () => {
            const newMovement: NewMovement = { descripcion: motivo, monto: monto, tarjeta, fechaHora: new Date() };
            const paymentResponse = await addMovement(newMovement);

            goToMyTicket(paymentResponse);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Payment;
