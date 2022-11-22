import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import MyCards from '../screens/MyCards';
import Home from '../screens/Home';
import useAuth from '../hooks/useAuth';

const Drawer = createDrawerNavigator();

const DrawerHome = () => {
  const { signOut } = useAuth();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerLeft: () => null,
        headerRight: () => <DrawerToggleButton />,
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Cerrar sesión" onPress={signOut} />
          </DrawerContentScrollView>
        );
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerItemStyle: { display: 'none' },
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerHome;
