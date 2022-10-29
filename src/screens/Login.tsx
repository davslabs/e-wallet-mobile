import React, { useState } from 'react';
import { VStack, Box } from 'native-base';
import useAuth from '../hooks/useAuth';
import { ActionButton, FormInput, PressableIcon } from '../components/shared';

const Login = () => {
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
    </Box>
  );
};

export default Login;
