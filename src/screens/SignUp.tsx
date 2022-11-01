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
  Stack,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import useAuth from '../hooks/useAuth';
import { ActionButton, FormInput, PressableIcon } from '../components/shared';
import SideButtonInput from '../components/shared/SideButtonInput';

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
          {/* <FormInput
            label="Fecha"
            placeholder="2022-10-11"
            value={moment(fechaNacimiento).toString()}
            keyboardType="default"
            onChangeText={setFechaNacimiento}
            disabled
            icon={
              <Button ml={2} onPress={showDatepicker}>
                <Icon as={<MaterialIcons name="date-range" />} color="white" />
              </Button>
            }
          /> */}
          {/* <FormInput
            label="Fecha"
            placeholder="2022-10-11"
            value={moment(fechaNacimiento).toString()}
            keyboardType="default"
            onChangeText={setFechaNacimiento}
            disabled
            groupedIcon={
              <InputRightAddon
                backgroundColor="primary.500"
                children={
                  <PressableIcon
                    handlePress={() => showDatepicker()}
                    iconName="date-range"
                    size={5}
                    ml="2"
                    color="white"
                  />
                }
              />
            }
          /> */}
          {/* <FormInput
            label="Fecha de nacimiento"
            placeholder={fechaNacimiento.toString()}
            keyboardType="default"
            value={fechaNacimiento.toString()}
            onChangeText={setFechaNacimiento}
          /> */}
          <SideButtonInput
            label="Fecha de nacimiento"
            placeholder={moment.HTML5_FMT.DATE}
            keyboardType="default"
            value={fechaNacimiento.toLocaleDateString()}
            onChangeText={setFechaNacimiento}
            sideButton={
              <Button h={10} m="0" onPress={showDatepicker}>
                {show && <DateTimePicker value={fechaNacimiento} is24Hour onChange={onChange} />}
                <Icon as={<MaterialIcons name="date-range" />} color="white" />
              </Button>
            }
          />
          <FormControl>
            <FormControl.Label>Fecha de nacimiento</FormControl.Label>
            <Stack alignItems="center" w="100%">
              <InputGroup>
                <Input
                  w={{
                    base: '84%',
                    md: '100%',
                  }}
                  isDisabled
                  value={moment(fechaNacimiento).format('LL')}
                  onChange={setFechaNacimiento}
                />
                <InputRightAddon
                  bg="primary.600"
                  w="16%"
                  p="0"
                  children={
                    <Button h={10} m="0" onPress={showDatepicker}>
                      {show && <DateTimePicker value={fechaNacimiento} is24Hour onChange={onChange} />}
                      <Icon as={<MaterialIcons name="date-range" />} color="white" />
                    </Button>
                  }
                />
              </InputGroup>
            </Stack>
            {/* <ActionButton text="Mostrar Fecha" handlePress={showDatepicker} />
            {show && <DateTimePicker value={fechaNacimiento} is24Hour onChange={onChange} />} */}
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
