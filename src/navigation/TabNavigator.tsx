import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import MyCards from '../screens/MyCards';
import DrawerNavigator from './DrawerNavigator';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const PlaceHolderComponent = () => {
  return <></>;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ tabBarLabel: 'Inicio', tabBarIcon: () => <MaterialIcons name="home" size={24} color="#E18D51" /> }}
      />
      <Tab.Screen
        name="Pay"
        component={PlaceHolderComponent}
        options={{
          tabBarLabel: 'Pagar',
          tabBarIcon: () => <MaterialIcons name="credit-card" size={24} color="#E18D51" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
