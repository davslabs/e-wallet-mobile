import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useFonts from '../hooks/useFonts';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import { StackNavigatorParamsList } from '../types/StackNavigatorParamsList';
import HomeNavigator from './HomeNavigator';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

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
        headerShown: false,
      }}
      initialRouteName={auth?.isLoggedIn ? 'HomeNavigator' : 'Login'}
    >
      {auth?.isLoggedIn ? (
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
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
