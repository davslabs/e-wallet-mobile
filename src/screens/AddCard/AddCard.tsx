import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import ActionButton from '../../components/shared/ActionButton';
import FormInput from '../../components/shared/FormInput';
import CategoryMap from '../../components/shared/CreditCard/utils/category-map';
import CategoryNumberMap from '../../components/shared/CreditCard/utils/category-number-map';
import CreditCard from '../../components/shared/CreditCard/CreditCard';
import { Box, Center, Heading, Icon, Text, ScrollView, VStack, useToast } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NewCreditCard } from 'types/NewCreditCard';
import { useCreditCards } from '../../hooks/useCreditCards';
import moment from 'moment';

const AddCard = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardSuffix, setCardSuffix] = useState('XXXX');
  const [cardHolder, setCardHolder] = useState('');
  const [cardDueDate, setCardDueDate] = useState(moment());
  const [cardCVV, setCardCVV] = useState('');
  const [cardType, setCardType] = useState('VISA');
  const [cardCategory, setCardCategory] = useState('CLASSIC');
  const { saveCard } = useCreditCards();
  const toast = useToast();

  const CardMaxLength = 19;
  const CVVMaxLength = 4;

  const cleanCreditCardNumber = (value: string) => {
    let result: string = '';
    if (value) {
      result = value.replace(/\D/g, '').slice(0, CardMaxLength);
    }
    return result;
  };

  interface ValidationResult {
    success: Boolean;
    message: string;
  }

  const validateCardData = (card: NewCreditCard): ValidationResult => {
    const CreditCardRegex = `^[0-9]{10,${CardMaxLength}}$`;
    const CVVRegex = `^[0-9]{3,${CVVMaxLength}}$`;
    let result: ValidationResult = { message: '', success: true };
    if (!card.codigoDeSeguridad || !card.codigoDeSeguridad.match(CVVRegex))
      result = { message: 'El codigo de seguridad no es válido', success: false };
    if (!card.fechaVencimiento || !moment(card.fechaVencimiento).isAfter())
      result = { message: 'La fecha de vencimiento no es válida', success: false };
    if (!card.tipo || !card.categoria || !card.numero || !card.numero.match(CreditCardRegex))
      result = { message: 'El número de tarjeta no es válido', success: false };
    if (!card.titular) result = { message: 'Ingrese el titular de la tarjeta', success: false };
    return result;
  };

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '600',
      left: 40,
      marginBottom: 5,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <ScrollView>
      <Text style={styles.title}>Agregar tarjeta</Text>
      <Center style={styles.container}>
        <Box mt={2}>
          <CreditCard
            cardHolder={cardHolder}
            dueDate={cardDueDate}
            cardSuffix={cardSuffix}
            bgColor={CategoryMap[cardCategory]}
            type={cardType}
          />
        </Box>
        <Box safeArea p="2" maxW={['90%', '90%', '50%']} minW="290" justifyContent="center">
          <Heading mt="1" fontWeight="medium" size="xs">
            Por favor, complete los siguientes datos
          </Heading>
          <VStack space={2} mt="1">
            <FormInput
              label="Numero de tarjeta"
              placeholder="XXXX XXXX XXXX XXXX"
              helpText="Ingrese el número de la tarjeta que desea agregar"
              keyboardType="numeric"
              value={cardNumber}
              maxLength={CardMaxLength}
              onChangeText={(value) => {
                setCardSuffix(value.slice(-4));
                setCardType(value.slice(0, 1) === '4' ? 'VISA' : 'MASTERCARD');
                let categoryDigit = value.length > 1 ? parseInt(value.slice(1, 2)) : 0;
                setCardCategory(CategoryNumberMap[categoryDigit]);
                setCardNumber(cleanCreditCardNumber(value));
              }}
              iconLeft={<Icon as={<MaterialIcons name="credit-card" />} size={5} marginLeft="2" color="muted.400" />}
            />
            <FormInput
              label="Titular"
              placeholder="Nombre Apellido"
              keyboardType="default"
              value={cardHolder}
              onChangeText={setCardHolder}
              iconLeft={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
              helpText="Ingrese el nombre y apellido como se ve en la tarjeta"
            />
            <Box flexDirection={'row'} justifyContent="space-between" marginBottom={3}>
              <FormInput
                label="Vencimiento"
                placeholder="AAAA-MM"
                keyboardType="numeric"
                maxLength={7}
                width={'45%'}
                value={cardDueDate}
                onChangeText={value => setCardDueDate(moment(new Date(value)))}
                iconLeft={<Icon as={<MaterialIcons name="date-range" />} size={5} ml="2" color="muted.400" />}
                helpText="Año y mes"
              />

              <FormInput
                label="CVV"
                placeholder="***"
                keyboardType="numeric"
                width={'45%'}
                value={cardCVV}
                maxLength={CVVMaxLength}
                onChangeText={setCardCVV}
                iconLeft={<Icon as={<MaterialIcons name="credit-card" />} size={5} ml="2" color="muted.400" />}
                helpText="Código de seguridad"
              />
            </Box>
            <ActionButton
              text="Guardar"
              handlePress={() => {
                let card: NewCreditCard = {
                  categoria: cardCategory,
                  titular: cardHolder,
                  fechaVencimiento: cardDueDate,
                  codigoDeSeguridad: cardCVV,
                  numero: cardNumber,
                  tipo: cardType,
                };
                let result: ValidationResult;
                result = validateCardData(card);
                if (result.success) {
                  saveCard(card).then((response) => {
                    if (response) {
                      navigation.navigate('MyCards');
                    } else {
                      result = {
                        success: false,
                        message: 'Error al guardar la tarjeta',
                      };
                    }
                  });
                }
                if (!result.success) {
                  toast.show({
                    description: result.message,
                    placement: 'top',
                  });
                }
              }}
            />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};
export default AddCard;
