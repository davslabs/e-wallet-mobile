import useAuth from 'hooks/useAuth';
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

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
function Login() {
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
        <Button title="Login" onPress={() => signIn(email, password)} />
      </View>
    </View>
  );
}

export default Login;
