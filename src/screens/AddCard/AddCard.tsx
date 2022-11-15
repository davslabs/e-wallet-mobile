import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import ActionButton from '../../components/shared/ActionButton';
import FormInput from '../../components/shared/FormInput';
import { Box, Center, Heading, Icon, ScrollView, VStack } from 'native-base';
import React from 'react';

const AddCard = ({ navigation }: any) => {
  const goToMyCards = () => {
    navigation.navigate('MyCards');
  };

  return (
    <ScrollView>
      <Center w="100%">
        <Box safeArea p="2" maxW={['90%', '90%', '50%']} minW="290" justifyContent="center">
          <Heading size="lg" fontWeight="semibold">
            Agregar tarjeta
          </Heading>
          <Heading mt="1" fontWeight="medium" size="xs">
            Por favor, complete los siguientes datos
          </Heading>
          <VStack space={3} mt="5">
            <FormInput
              label="Numero de tarjeta"
              placeholder="XXXX XXXX XXXX XXXX"
              keyboardType="numeric"
              value={''}
              onChangeText={() => console.log('hola, yo tambien')}
              iconLeft={<Icon as={<MaterialIcons name="credit-card" />} size={5} marginLeft="2" color="muted.400" />}
            />
            <FormInput
              label="Vencimiento"
              placeholder="MM/AA"
              keyboardType="numeric"
              value={''}
              onChangeText={() => console.log('hola, cambie')}
              iconLeft={<Icon as={<MaterialIcons name="date-range" />} size={5} ml="2" color="muted.400" />}
            />
            <FormInput
              label="Titular"
              placeholder="Nombre Apellido"
              keyboardType="default"
              value={''}
              onChangeText={() => console.log('hola, cambie')}
              iconLeft={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
            />
            <FormInput
              label="CVV"
              placeholder="***"
              keyboardType="numeric"
              value={''}
              onChangeText={() => console.log('hola, cambie')}
              iconLeft={<Icon as={<MaterialIcons name="credit-card" />} size={5} ml="2" color="muted.400" />}
            />
            <ActionButton
              text="Guardar"
              handlePress={() => console.log('TO-DO-DO-DO')}
              /* handlePress={ () => 
                signUp(nombre, email, fechaNacimiento, password, confirmarPassword).then((response) => {
                  console.log(response);
                  if ((response = true)) {
                    gotoMyCards;
                  } else {
                    console.error('No se pudo agregar la tarjeta, por favor verifique los datos');
                  }
                })
            }*/
            />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default AddCard;
