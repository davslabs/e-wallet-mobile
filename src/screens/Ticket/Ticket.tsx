import React, { useEffect, useState } from 'react';
import { Center, Box, VStack, Text, Heading } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { ActionButton, MiniCreditCard } from '../../components';
import { useCreditCards } from '../../hooks/useCreditCards';
import { CreditCard } from '../../types/CreditCard';
import CategoryMap from '../../components/shared/CreditCard/utils/category-map';

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
    fontSize: 15,
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

const Ticket = ({ route, navigation }: any) => {
  const goToMyHome = () => {
    navigation.navigate('Home');
  };

  const [usedCard, setUsedCard] = useState<CreditCard | undefined>(undefined);

  const { cards } = useCreditCards();
  const { id, descripcion, monto, tarjeta } = route.params;

  useEffect(() => {
    if (cards) {
      const card = cards.find((card) => card.id === tarjeta);
      setUsedCard(card);
    }
  }, [cards]);

  return (
    <Center style={styles.container}>
      <Pressable>
        <VStack shadow={10} style={[styles.ticket, { backgroundColor: '#EDBA96', opacity: 0.3, padding: 10 }]}>
          <Heading style={[styles.title, { padding: 10 }]}>Confirmación de pago: {id}</Heading>
          <Text style={styles.fixToText}>Motivo: {descripcion}</Text>
          <Text style={styles.fixToText}>Monto: ${monto}</Text>
        </VStack>
      </Pressable>

      <Center>
        <Box style={styles.card}>
          {usedCard && (
            <MiniCreditCard
              cardHolder={usedCard.titular}
              cardSuffix={usedCard.suffix}
              bgColor={CategoryMap[usedCard.categoria]}
              type={usedCard.tipo}
            />
          )}
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
