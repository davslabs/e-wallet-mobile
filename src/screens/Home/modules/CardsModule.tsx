import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { CreditCard, EmptyCreditCard, PressableIcon } from '../../../components/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { CreditCard as CreditCardType } from '../../../types/CreditCard';
// import CategoryMap from '../../../components/shared/CreditCard/utils/category-map';

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

interface CardsModuleProps {
  handlePress: () => void;
  cards: CreditCardType[];
}

const CardsModule = ({ cards, handlePress }: CardsModuleProps) => {
  return (
    <VStack space={5}>
      <Box>
        <Text style={styles.title}>Mis tarjetas</Text>
      </Box>
      <Pressable onPress={handlePress}>
        <HStack>
          {/* <Box>
          <EmptyCreditCard handlePress={handlePress} />
        </Box> */}
          <Box>
            <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="#DAA520" type="VISA" />
          </Box>
          <Box ml={-280} mt={5}>
            <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="blue" type="MASTERCARD" />
          </Box>
          <Box ml={-270} mt={10}>
            <CreditCard cardHolder="John Doe" dueDate="12/2021" cardSuffix="3456" bgColor="grey" type="MASTERCARD" />
          </Box>
          {/* {cards.map((card: CreditCardType, i) => {
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
          })} */}
        </HStack>
        <HStack justifyContent="space-between" mt={5}>
          <Text style={styles.textButton}>Ver mis tarjetas</Text>
          <MaterialIcons name="chevron-right" size={25} />
        </HStack>
      </Pressable>
    </VStack>
  );
};

export default CardsModule;
