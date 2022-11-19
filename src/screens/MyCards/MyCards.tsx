import { MiniCreditCard } from '../../components';
import { CreditCard as CreditCardType } from '../../types/CreditCard';
import React from 'react';
import { Center, Box, ScrollView, Fab, Icon, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { useCreditCards } from '../../hooks/useCreditCards';
import CategoryMap from '../../components/shared/CreditCard/utils/category-map';
import AntDesign from '@expo/vector-icons/build/AntDesign';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const MyCards = ({ navigation }: any) => {
  const gotoAddCard = () => {
    navigation.navigate('AddCard');
  };

  const { cards } = useCreditCards();
  return (
    <View h="full">
      <Center style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Center>
            {cards.map((card: CreditCardType, i) => {
              return (
                <Box key={i} mb={3}>
                  <MiniCreditCard
                    cardHolder={card.titular}
                    cardSuffix={card.suffix}
                    bgColor={CategoryMap[card.categoria]}
                    type={card.tipo}
                  />
                </Box>
              );
            })}
          </Center>
        </ScrollView>
      </Center>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        onPress={gotoAddCard}
      />
    </View>
  );
};
export default MyCards;
