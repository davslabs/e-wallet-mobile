import { useCreditCards } from '../../hooks/useCreditCards';
import { useMovements } from '../../hooks/useMovements';
import { Center, VStack } from 'native-base';
import React from 'react';
import { CardsModule, MovementsModule } from './modules';
import Splash from '../Splash';

const Home = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const { movements } = useMovements();

  const goToAddCard = () => {
    navigation.navigate('AddCard');
  };
  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };
  const goToMyMovements = () => {
    navigation.navigate('Movements', { movements });
  };

  return (
    <Center>
      {cards && movements ? (
        <>
          <VStack space={10}>
            <CardsModule cards={cards} handlePress={cards.length ? goToMyCards : goToAddCard} />
            <MovementsModule movements={movements} handlePress={goToMyMovements} />
          </VStack>
        </>
      ) : (
        <Splash />
      )}
    </Center>
  );
};

export default Home;
