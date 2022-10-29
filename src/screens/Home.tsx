import { VStack, Box, Button, Text } from 'native-base';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Home = () => {
  const { signOut } = useAuth();
  return (
    <Box style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <VStack>
        <Button onPress={signOut}>
          <Text color="white">{'Cerrar Sesión'.toUpperCase()}</Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
