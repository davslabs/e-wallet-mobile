import React from 'react';
import { Button, View } from 'react-native';
import useAuth from '../hooks/useAuth';

const Home = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default Home;
