import { useCreditCards } from '../../hooks/useCreditCards';
import { useMovements } from '../../hooks/useMovements';
import { Center, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CardsModule, MovementsModule } from './modules';
import Splash from '../Splash';
import { ActionButton } from '../../components';
import useAuth from '../../hooks/useAuth';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const Home = ({ navigation }: any) => {
  const { cards } = useCreditCards();
  const { movements } = useMovements();
  const { signOut, auth } = useAuth();

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
    <Center style={styles.container}>
      {cards && movements ? (
        <>
          <VStack space={10}>
            <CardsModule cards={cards} handlePress={cards.length ? goToMyCards : goToAddCard} />
            <MovementsModule movements={movements} handlePress={goToMyMovements} />
          </VStack>
          <VStack marginTop={10}>
            <ActionButton handlePress={signOut} text={`Adios ${auth.email}`} />
          </VStack>
        </>
      ) : (
        <Splash />
      )}
    </Center>
  );
};

export default Home;
