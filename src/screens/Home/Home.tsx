import { VStack, Box, Text, Container } from 'native-base';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import MyCards from './modules';

const Home = () => {
  return (
    <>
      <Container position="relative">
        <MyCards />
      </Container>
      <Text>pepe</Text>
    </>
  );
};

export default Home;
