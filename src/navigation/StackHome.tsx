import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddCard from '../screens/AddCard';
import MyCards from '../screens/MyCards';
import DrawerHome from './DrawerHome';
import Ticket from '../screens/Ticket';
import Movements from '../screens/Movements';
import { StackNavigatorParamsList } from 'types/StackNavigatorParamsList';
import { Header } from '../components/shared';

const Stack = createStackNavigator<StackNavigatorParamsList>();

const StackHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, back }) => <Header navigation={navigation} back={back} />,
      }}
    >
      <Stack.Screen name="DrawerHome" component={DrawerHome} />
      <Stack.Screen name="MyCards" component={MyCards} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Movements" component={Movements} />
      <Stack.Screen name="Ticket" component={Ticket}  options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default StackHome;
