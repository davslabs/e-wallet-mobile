import { CreditCard, EmptyCreditCard, FormInput, MiniCreditCard } from '../../components';
import { CreditCard as CreditCardType } from '../../types/CreditCard';
import React, { useState } from 'react';
import { Center, Box, ScrollView, Fab, Icon, HStack, Button, Pressable } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useCreditCards } from '../../hooks/useCreditCards';
import CategoryMap from '../../components/shared/CreditCard/utils/category-map';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});


const MyCards = ({ navigation }: any) => {
  const gotoAddCard = () =>{
    navigation.navigate('AddCard');
  }

  const { cards } = useCreditCards();
  return (
    <Center style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Center>
          {cards.map((card: CreditCardType, i) => {
            return (
              <Pressable key={i} onLongPress={() => alert('Borrar con long-press')}>
                <Box mb={3}>
                  <CreditCard
                    cardHolder={card.titular}
                    dueDate={card.fechaVencimiento}
                    cardSuffix={card.suffix}
                    bgColor={CategoryMap[card.categoria]}
                    type={card.tipo}
                  />
                </Box>
              </Pressable>
            );
          })}
          <Box>
            <EmptyCreditCard handlePress={gotoAddCard} />
          </Box>
        </Center>
      </ScrollView>
    </Center>
  );
};
export default MyCards;
