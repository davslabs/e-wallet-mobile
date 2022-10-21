import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { auth, refreshToken, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      refreshToken();
    }
  }, [isLoading, refreshToken]);

  if (isLoading) return <Splash />;

  return (
    <Stack.Navigator initialRouteName={auth?.isLoggedIn ? 'Home' : 'Login'}>
      {auth?.isLoggedIn ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
