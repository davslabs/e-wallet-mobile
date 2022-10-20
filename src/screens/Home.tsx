import useAuth from 'hooks/useAuth';
import React from 'react';
import { Button, View } from 'react-native';

const Home = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default Home;
