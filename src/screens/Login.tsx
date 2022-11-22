import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Icon, ScrollView, Center, Image, Button, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import { ActionButton, FormInput, PressableIcon, EarthOne } from '../components/shared';
import Logo from '../assets/images';

const styles = StyleSheet.create({
  rightContainer: {
    flex: 1,
  },
});

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();

  return (
    <ScrollView>
      <Center safeArea>
        <VStack w="85%" space={4} mt="5" justifyContent="center">
          <Center>
            <Image source={Logo} alt="Wall-ET" width="200" height="200" />
          </Center>
          <Box mt={10}>
            <FormInput
              label="Email"
              placeholder="name@example.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              iconLeft={<Icon as={<MaterialIcons name="alternate-email" />} size={5} ml="2" color="muted.400" />}
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
          </Box>
          <ActionButton text="Iniciar sesión" handlePress={() => signIn(email, password)} />
        </VStack>
        <EarthOne />
        <VStack mt="10" w="35%" alignItems="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            No tenés cuenta?
          </Text>
          <Button variant="link" onPress={() => navigation.navigate('SignUp')}>
            Registrate
          </Button>
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default Login;
