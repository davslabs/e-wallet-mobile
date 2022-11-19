import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <StackNavigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}
