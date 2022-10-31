import { Center, Container } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CardsModule from './modules';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const Home = ({ navigation }: any) => {
  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };

  return (
    <Center style={styles.container}>
      <CardsModule handlePress={goToMyCards} />
    </Center>
  );
};

export default Home;
