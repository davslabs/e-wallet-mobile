import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerHome from './DrawerHome';
import StackHome from './StackHome';

const Tab = createBottomTabNavigator();

const PlaceHolderComponent = () => {
  return <></>;
};

const AppNavigator = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          color: 'black',
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        listeners={{
          tabPress: () => {
            navigation.navigate('Home');
          },
        }}
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

export default AppNavigator;
