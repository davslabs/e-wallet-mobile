import React, { useState } from 'react';
import { Center, Box, Heading, VStack, Icon, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import { ActionButton, FormInput, DateInput, PressableIcon, SideButtonInput, EarthOne } from '../components/shared';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const { signUp } = useAuth();
  const { signIn } = useAuth();

  return (
    <ScrollView>
      <Center w="100%">
        <Box safeArea p="2" maxW={['90%', '90%', '50%']} minW="290" justifyContent="center">
          <Heading size="lg" fontWeight="semibold">
            Registrar
          </Heading>
          <Heading mt="1" fontWeight="medium" size="xs">
            Por favor, complete los siguientes datos
          </Heading>
          <VStack space={3} mt="5">
            <FormInput
              label="Nombre"
              placeholder="Nombre"
              keyboardType="default"
              value={nombre}
              onChangeText={setNombre}
              iconLeft={<Icon as={<MaterialIcons name="person" />} size={5} marginLeft="2" color="muted.400" />}
            />
            <FormInput
              label="Email"
              placeholder="name@example.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              iconLeft={<Icon as={<MaterialIcons name="alternate-email" />} size={5} ml="2" color="muted.400" />}
            />
            <DateInput
              label="Fecha de nacimiento"
              value={fechaNacimiento}
              helpText="Deberá ser mayor a 18 años para registrarse."
              onChangeHandler={setFechaNacimiento}
            />
            <FormInput
              label="Contraseña"
              placeholder="********"
              type={showPassword ? 'text' : 'password'}
              keyboardType="default"
              value={password}
              onChangeText={setPassword}
              helpText="La contraseña tendrá que tener al menos 8 caracteres."
              icon={
                <PressableIcon
                  handlePress={() => setShowPassword(!showPassword)}
                  iconName={showPassword ? 'visibility-off' : 'visibility'}
                />
              }
            />
            <FormInput
              label="Confirmar contraseña"
              placeholder="********"
              type={showPassword ? 'text' : 'password'}
              keyboardType="default"
              value={confirmarPassword}
              onChangeText={setConfirmarPassword}
              icon={
                <PressableIcon
                  handlePress={() => setShowPassword(!showPassword)}
                  iconName={showPassword ? 'visibility-off' : 'visibility'}
                />
              }
            />
            <ActionButton
              text="Registrar"
              handlePress={() =>
                signUp(nombre, email, fechaNacimiento, password, confirmarPassword).then((response) => {
                  if (response === true) {
                    signIn(email, password);
                  } else {
                    console.error('Hubo un error al intentar el registro');
                  }
                })
              }
            />
          </VStack>

          <EarthOne />
        </Box>
      </Center>
    </ScrollView>
  );
};

export default SignUp;
