import React from 'react';
import { Box, Text, Center, FlatList } from 'native-base';
import { ScrollView, StyleSheet, } from 'react-native';
import { CreditCard } from '../../../components/shared';
import { CreditCard as CreditCardType } from '../../../types/CreditCard';
import CategoryMap from '../../../components/shared/CreditCard/utils/category-map';



const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    paddingLeft:30
  }
});

interface CardsModuleSlidableProps {
  onViewableItemsChanged: (viewableItems: any, changed: any) => void;
  cards: CreditCardType[];
}

const CardsModuleSlidable = ({ cards, onViewableItemsChanged}: CardsModuleSlidableProps) => {
  
  let viewabilityConfig = {
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 95,
    itemVisiblePercentThreshold: 75
  }

  return (

    
    <ScrollView>
    <Box>
        <Text style={styles.title}>Tarjetas</Text>
    </Box>
    <Center>         
                <FlatList 
                data={cards}
                viewabilityConfig = {viewabilityConfig}
                renderItem={({item}) =>  
                <Box style={{padding:5}}>
                <CreditCard 
                  cardHolder={item.titular}
                  dueDate={item.fechaVencimiento}
                  cardSuffix={item.suffix}
                  bgColor={CategoryMap[item.categoria]}
                  type={item.tipo}
                />
                </Box>}
                keyExtractor={item => item.id}
                horizontal={true}
                onViewableItemsChanged = {onViewableItemsChanged}
                showsVerticalScrollIndicator={false}
                //initialScrollIndex={cards.length >= 1 ? 1 : 0}
                >
                </FlatList>
      </Center>
      </ScrollView>
  );
};

export default CardsModuleSlidable;
