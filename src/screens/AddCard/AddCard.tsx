import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import ActionButton from '../../components/shared/ActionButton';
import FormInput from '../../components/shared/FormInput';
import { Box, Center, Heading, Icon, ScrollView, VStack } from 'native-base';
import React, { useState } from 'react';
import CreditCard from '../../components/shared/CreditCard/CreditCard';
import CategoryMap from '../../components/shared/CreditCard/utils/category-map';

const AddCard = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardSuffix, setCardSuffix] = useState('XXXX');
  const [cardHolder, setCardHolder] = useState('');
  const [cardDueDate, setCardDueDate] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardType, setCardType] = useState('VISA');
  return (
    <ScrollView>
      <Center>
        <Box mt={2}>
          <CreditCard
            cardHolder={cardHolder}
            dueDate={cardDueDate}
            cardSuffix={cardSuffix}
            bgColor={CategoryMap['CLASSIC']}
            type={cardType}
          />
        </Box>
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
              value={cardNumber}
              onChangeText={(value) => {
                setCardNumber(value);
                setCardSuffix(value.slice(-4));
                let cardTypeName = value.slice(0, 1) === '4' ? 'VISA' : 'MASTERCARD';
                setCardType(cardTypeName);
              }}
              iconLeft={<Icon as={<MaterialIcons name="credit-card" />} size={5} marginLeft="2" color="muted.400" />}
            />
            <FormInput
              label="Vencimiento"
              placeholder="AAAA-MM"
              keyboardType="numeric"
              value={cardDueDate}
              onChangeText={(value) => setCardDueDate(value)}
              iconLeft={<Icon as={<MaterialIcons name="date-range" />} size={5} ml="2" color="muted.400" />}
            />
            <FormInput
              label="Titular"
              placeholder="Nombre Apellido"
              keyboardType="default"
              value={cardHolder}
              onChangeText={(value) => setCardHolder(value.toUpperCase())}
              iconLeft={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
            />
            <FormInput
              label="CVV"
              placeholder="***"
              keyboardType="numeric"
              value={cardCVV}
              onChangeText={(value) => setCardCVV(value.slice(0, 4))}
              iconLeft={<Icon as={<MaterialIcons name="credit-card" />} size={5} ml="2" color="muted.400" />}
            />
            <ActionButton text="Guardar" handlePress={() => alert('WIP')} />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default AddCard;
