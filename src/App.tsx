import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, SafeAreaView } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { AuthProvider } from './context/AuthProvider';
import theme from './styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaView>
    </AuthProvider>
  );
}
