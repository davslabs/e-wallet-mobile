import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCard from '../screens/AddCard';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
