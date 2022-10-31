import { MaterialIcons } from '@expo/vector-icons';
import { HStack } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';

interface GoBackButtonProps {
  onPress: () => void;
}

const GoBackButton = ({ onPress }: GoBackButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name="chevron-left" size={40} color="black" />
    </Pressable>
  );
};

export default GoBackButton;
