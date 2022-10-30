import React from 'react';
import { Text, VStack, HStack } from 'native-base';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { MasterCardIcon, VisaIcon } from './icons';

interface CreditCardProps {
  cardHolder: string;
  dueDate: string;
  cardSuffix: string;
  bgColor: string;
  type: 'visa' | 'mastercard';
  style?: StyleProp<ViewStyle>;
}

const CreditCard = ({ cardHolder, dueDate, cardSuffix, bgColor, type, style }: CreditCardProps) => {
  const dot = [styles.dot, { backgroundColor: styles.text.color }];
  return (
    <VStack shadow={7} style={[styles.card, { backgroundColor: bgColor }, style]}>
      {type === 'visa' ? <VisaIcon /> : <MasterCardIcon />}
      <HStack style={styles.cardNumberContainer}>
        {[...Array(3)].map((e, i) => {
          return (
            <HStack key={i} style={styles.cardNumberPart}>
              {[...Array(4)].map((e, i) => {
                return <HStack key={i} style={dot} />;
              })}
            </HStack>
          );
        })}
        <Text style={styles.text}>{cardSuffix}</Text>
      </HStack>
      <HStack style={styles.footerContainer}>
        <Text style={styles.text}>{cardHolder}</Text>
        <Text style={styles.text}>{dueDate}</Text>
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: 290,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.53,
  },
  cardNumberPart: {
    flexDirection: 'row',
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
});

export default CreditCard;
