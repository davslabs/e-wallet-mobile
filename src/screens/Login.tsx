import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { HStack, Text, Button } from 'native-base';
import useAuth from '../hooks/useAuth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputControl: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
  },
  buttonControl: {
    width: '80%',
  },
});

const Login = ( { navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputControl}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputControl}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonControl}>
        <Button onPress={() => signIn(email, password)}>Login</Button>
      </View>
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="sm"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
        >
          No tengo cuenta.{' '}
        </Text>
        <Button
          colorScheme="indigo"
          _text={{
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          onPress={() => navigation.navigate('Registrar')}
        >
          Registrar
        </Button>
      </HStack>
    </View>
  );
};

export default Login;
