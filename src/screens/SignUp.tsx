import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Center, Box, Heading, VStack, FormControl, Input, Button } from 'native-base';
import useAuth from '../hooks/useAuth';
import { ActionButton, FormInput, PressableIcon } from '../components/shared';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  // Fecha
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate instanceof Date ? selectedDate : new Date();
    setShow(false);
    setFechaNacimiento(currentDate);
  };

  const showMode = (currentMode: any) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const { signUp } = useAuth();

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8" justifyContent="center">
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
          />
          <FormInput
            label="Email"
            placeholder="name@example.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <FormControl>
            <FormControl.Label>Fecha de nacimiento: {fechaNacimiento.toLocaleString()}</FormControl.Label>
            <ActionButton text="Mostrar Fecha" handlePress={showDatepicker} />
            {show && <DateTimePicker value={fechaNacimiento} is24Hour onChange={onChange} />}
          </FormControl>
          <FormInput
            label="Contraseña"
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
            handlePress={() => signUp(nombre, email, fechaNacimiento, password, confirmarPassword)}
          />
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;
