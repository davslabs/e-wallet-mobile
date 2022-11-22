import moment from 'moment';
import 'moment/locale/es';
import { VStack, Text, Box, InfoIcon } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface MiniMovementProps {
  description: string;
  amount: number;
  date: Date;
  alt?: boolean | undefined;
}

const styles = StyleSheet.create({
  movement: {
    marginBottom: 2,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: 360,
  },
  mainText: {
    color: 'black',
    fontSize: 13,
    letterSpacing: 0.53,
  },
  text: {
    color: 'black',
    fontSize: 11,
  },
});

const MiniMovement = ({ description, amount, date, alt }: MiniMovementProps) => {
  moment.locale('es');
  return (
    <VStack style={styles.movement} backgroundColor={`${alt ? 'primary.100' : 'primary.300'}:alpha.90`}>
      <Text style={styles.mainText}>$ {amount.toFixed(2)}</Text>
      <Text style={styles.text}>
        {description}&#9;-&#9;&#9;{moment(date.toString()).locale('es').format('D MMM HH:mm')}
      </Text>
    </VStack>
  );
};

export default MiniMovement;
