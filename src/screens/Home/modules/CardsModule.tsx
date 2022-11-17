import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { CreditCard, EmptyCreditCard, PressableIcon } from '../../../components/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { CreditCard as CreditCardType } from '../../../types/CreditCard';
import CategoryMap from '../../../components/shared/CreditCard/utils/category-map';

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

const maxCardsInHome = 3;
interface CardsModuleProps {
  handlePress: () => void;
  cards: CreditCardType[];
}

const CardsModule = ({ cards, handlePress }: CardsModuleProps) => {
  return (
    <VStack space={5} marginTop={5}>
      <Box>
        <Text style={styles.title}>Mis tarjetas</Text>
      </Box>
      {cards.length ? (
        <Pressable onPress={handlePress}>
          <HStack>
            {cards.slice(0, maxCardsInHome).map((card: CreditCardType, i) => {
              return (
                <Box key={i} ml={i > 0 ? -290 + i * 10 : 0} mt={i * 2}>
                  <CreditCard
                    cardHolder={card.titular}
                    dueDate={card.fechaVencimiento}
                    cardSuffix={card.suffix}
                    bgColor={CategoryMap[card.categoria]}
                    type={card.tipo}
                  />
                </Box>
              );
            })}
          </HStack>
          <HStack justifyContent="space-between" mt={5}>
            <Text style={styles.textButton}>Ver mis tarjetas</Text>
            <MaterialIcons name="chevron-right" size={25} />
          </HStack>
        </Pressable>
      ) : (
        <EmptyCreditCard handlePress={handlePress} />
      )}
    </VStack>
  );
};

export default CardsModule;
