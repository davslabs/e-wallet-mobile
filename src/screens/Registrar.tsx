import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Center, Box, Heading, VStack, FormControl, Input, Button } from 'native-base';
import useAuth from '../hooks/useAuth';

const Registrar = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  // Fecha
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setFechaNacimiento(currentDate);
  };

  const showMode = (currentMode) => {
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
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" fontWeight="semibold">
          Registrar
        </Heading>
        <Heading mt="1" fontWeight="medium" size="xs">
          Por favor, complete los siguientes datos
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Nombre</FormControl.Label>
            <Input type="text" value={nombre} onChangeText={setNombre} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input type="text" value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Fecha de nacimiento: {fechaNacimiento.toLocaleString()}</FormControl.Label>
            <Button mt="2" onPress={showDatepicker}>
              Mostrar fecha
            </Button>
            {show && (<DateTimePicker value={fechaNacimiento} mode={mode} is24Hour={true} onChange={onChange}
            />)}
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" value={password} onChangeText={setPassword} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirmar contraseña</FormControl.Label>
            <Input type="password" value={confirmarPassword} onChangeText={setConfirmarPassword} />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => signUp(nombre, email, fechaNacimiento, password, confirmarPassword)}
          >
            Registrar
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Registrar;
