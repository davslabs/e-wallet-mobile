import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useFonts from '../hooks/useFonts';
import Home from '../screens/Home';
import MyCards from '../screens/MyCards';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import { Header } from '../components';
import Movements from '../screens/Movements/MovementsScreen';
import { StackNavigatorParamsList } from 'types/StackNavigatorParamsList';

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();

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
      initialRouteName={auth?.isLoggedIn ? 'Home' : 'Login'}
    >
      {auth?.isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyCards" component={MyCards} />
          <Stack.Screen name="Movements" component={Movements} />
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
