import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useCallback, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useFonts from '../hooks/useFonts';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import AppNavigator from './AppNavigator';
import { Header } from '../components/shared';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { auth, refreshToken, isLoading } = useAuth();

  const loadApp = useCallback(async () => {
    await useFonts();
    await refreshToken();
  }, [useFonts, refreshToken]);

  useEffect(() => {
    if (isLoading) {
      loadApp();
    }
  }, [isLoading, loadApp]);

  if (isLoading) return <Splash />;

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, back }) => <Header navigation={navigation} back={back} />,
      }}
      initialRouteName={auth?.isLoggedIn ? 'HomeNavigator' : 'Login'}
    >
      {auth?.isLoggedIn ? (
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;