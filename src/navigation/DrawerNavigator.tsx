import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MyCards from '../screens/MyCards';
import Home from '../screens/Home';
import useAuth from '../hooks/useAuth';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { signOut } = useAuth();
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        const filteredProps = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter((routeName) => {
              routeName !== 'Home';
            }),
            routes: props.state.routes.filter((route) => route.name !== 'Home'),
          },
        };
        return (
          <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
            <DrawerItem label="Cerrar sesión" onPress={signOut} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MyCards" component={MyCards} options={{ drawerLabel: 'Mis tarjetas' }} />
    </Drawer.Navigator>
  );
}
