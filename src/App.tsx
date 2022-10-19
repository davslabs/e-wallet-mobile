import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from 'context/AuthProvider';
import StackNavigator from 'navigation/StackNavigator';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
