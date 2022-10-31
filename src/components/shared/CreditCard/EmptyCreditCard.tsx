import React from 'react';
import { HStack, Pressable, Text, VStack } from 'native-base';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface EmptyCreditCardProps {
  handlePress: (...args: any[]) => void;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    borderStyle: 'dashed',
    borderColor: '#E18D51',
    borderWidth: 2,
    width: 290,
    height: 160,
    position: 'relative',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    border: 'dashed 4px black',
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FCF4EE',
    fontSize: 20,
  },
});

const EmptyCreditCard = ({ handlePress, style }: EmptyCreditCardProps) => {
  return (
    <Pressable onPress={handlePress}>
      <VStack shadow={7} style={[styles.card, { backgroundColor: '#EDBA96' }, style]}>
        <HStack style={[styles.cardContainer, { justifyContent: 'space-around' }]}>
          <Text style={styles.text}>Agregar tarjeta</Text>
          <MaterialIcons name="add-circle-outline" size={24} color="#FCF4EE" />
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default EmptyCreditCard;
