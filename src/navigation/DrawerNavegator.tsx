import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyCards from 'screens/MyCards';
import Home from 'screens/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio" }}
      />
      <Drawer.Screen
        name="MyCards"
        component={MyCards}
        options={{ headerTransparent: true }}
      />
    </Drawer.Navigator>
  );
}