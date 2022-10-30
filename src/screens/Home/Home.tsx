import { Container } from 'native-base';
import React from 'react';
import CardsModule from './modules';

const Home = () => {
  return (
    <Container marginTop={10} marginLeft={10}>
      <CardsModule />
    </Container>
  );
};

export default Home;
