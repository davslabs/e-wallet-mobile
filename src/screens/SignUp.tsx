import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Icon,
  InputGroup,
  Input,
  InputRightAddon,
  Button,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
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
          <FormInput
            label="Fecha"
            placeholder="2022-10-11"
            value={fechaNacimiento.toString()}
            keyboardType="default"
            onChangeText={setFechaNacimiento}
            disabled
            icon={
              <Button ml={2} size="sm">
                <Icon as={<MaterialIcons name="date-range" />} size="sm" color="white" />
              </Button>
            }
          />
          <FormInput
            label="Fecha de nacimiento"
            placeholder={fechaNacimiento.getDate().toLocaleString()}
            keyboardType="default"
            value={fechaNacimiento.toString()}
            onChangeText={setFechaNacimiento}
          />
          <FormControl>
            <FormControl.Label>Fecha de nacimiento: {fechaNacimiento.toLocaleString()}</FormControl.Label>
            <InputGroup>
              <Input w="90%">SMACK MY ASS LIKE A DRUM</Input>
              <InputRightAddon
                children={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
              />
            </InputGroup>
            <ActionButton text="Mostrar Fecha" handlePress={showDatepicker} />
            {show && <DateTimePicker value={fechaNacimiento} is24Hour onChange={onChange} />}
            <FormControl.HelperText
              _text={{
                fontSize: 'xs',
              }}
            >
              Deberá ser mayor a 18 años para registrarse.
            </FormControl.HelperText>
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
