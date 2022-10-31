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
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <StackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}
