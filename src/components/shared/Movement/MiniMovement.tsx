import moment from 'moment';
import 'moment/locale/es';
import { VStack, Text, Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface MiniMovementProps {
  description: string;
  amount: number;
  date: Date;
}

const styles = StyleSheet.create({
  movement: {
    marginBottom: 2,
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor:'gainsboro',
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 2,
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

const MiniMovement = ({ description, amount, date }: MiniMovementProps) => {
  moment.locale('es');
  return (
    <VStack style={styles.movement}>
      <Text style={styles.mainText}>$ {amount.toFixed(2)}</Text>
      <Text style={styles.text}>{description}&#9;-&#9;&#9;{moment(date.toString()).locale('es').format('D MMM HH:mm')}</Text>

    </VStack>
  );
};

export default MiniMovement;
