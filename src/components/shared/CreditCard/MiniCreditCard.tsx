import { HStack, VStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { MasterCardIcon, VisaIcon } from './icons';

interface MiniCreditCardProps {
  cardHolder: string;
  cardSuffix: string;
  bgColor: string;
  type: 'VISA' | 'MASTERCARD';
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: 360,
    position: 'relative',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.53,
  },
  cardNumberPart: {
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
    marginTop: 8,
  },
});

const MiniCreditCard = ({ cardHolder, cardSuffix, bgColor, type, style }: MiniCreditCardProps) => {
  const dot = [styles.dot, { backgroundColor: styles.text.color }];
  return (
    <VStack shadow={7} style={[styles.card, { backgroundColor: bgColor }, style]}>
      {type === 'VISA' ? <VisaIcon /> : <MasterCardIcon />}
      <HStack justifyContent="space-around" style={styles.cardContainer}>
        <Text style={styles.text}>{cardHolder}</Text>
        <HStack style={styles.cardNumberPart}>
          {[...Array(4)].map((e, i) => {
            return <HStack key={i} style={dot} />;
          })}
          <Text style={styles.text}>{cardSuffix}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default MiniCreditCard;
