import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import StackNavigator from './navigation/StackNavigator';
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  return (
    /* <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider> */

    <NativeBaseProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
}
