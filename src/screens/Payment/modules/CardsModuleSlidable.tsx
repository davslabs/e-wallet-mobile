import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { CreditCard, EmptyCreditCard } from '../../../components/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { CreditCard as CreditCardType } from '../../../types/CreditCard';
import CategoryMap from '../../../components/shared/CreditCard/utils/category-map';


const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  textButton: {
    fontSize: 16,
    fontWeight: '300',
  },
});

interface CardsModuleSlidableProps {
  handlePress: () => void;
  cards: CreditCardType[];
}

const CardsModuleSlidable = ({ cards, handlePress }: CardsModuleSlidableProps) => {
  return (
    <VStack space={2}>
      <Box>
        <Text style={styles.title}>Tarjetas</Text>
      </Box>
      

      <Pressable onPress={handlePress}>
        <HStack>
           <Box>
          <EmptyCreditCard handlePress={handlePress} />
        </Box> 
          {cards.map((card: CreditCardType, i) => {
            return (
              <Box key={i}>
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
    </VStack>
  );
};

export default CardsModuleSlidable;
