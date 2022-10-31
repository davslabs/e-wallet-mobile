import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Box, Text } from 'native-base';
import useAuth from '../hooks/useAuth';
import { ActionButton, FormInput, PressableIcon } from '../components/shared';

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

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();

  return (
    <Box style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <VStack w="85%" space={4} alignItems="center">
        <FormInput
          label="Email"
          placeholder="name@example.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          label="Password"
          placeholder="********"
          type={showPassword ? 'text' : 'password'}
          keyboardType="default"
          value={password}
          onChangeText={setPassword}
          icon={
            <PressableIcon
              handlePress={() => setShowPassword(!showPassword)}
              iconName={showPassword ? 'visibility-off' : 'visibility'}
            />
          }
        />
        <ActionButton text="Iniciar sesión" handlePress={() => signIn(email, password)} />
      </VStack>
      <VStack mt="6" w="35%" space={4} alignItems="center">
        <Text
          fontSize="sm"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
        >
          No tengo cuenta.{' '}
        </Text>
        <ActionButton text="Registrar" handlePress={() => navigation.navigate('SignUp')} />
      </VStack>
    </Box>
  );
};

export default Login;
