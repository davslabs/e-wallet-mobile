import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Home from '../screens/Home';
import MyCards from '../screens/MyCards';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import { Header } from '../components';

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
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, back }) => <Header navigation={navigation} back={back} />,
      }}
      initialRouteName={auth?.isLoggedIn ? 'Home' : 'Login'}
    >
      {auth?.isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyCards" component={MyCards} />
        </>
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
