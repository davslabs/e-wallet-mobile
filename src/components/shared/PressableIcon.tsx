import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Icon } from 'native-base';

interface PressableIconProps {
  iconName: any;
  handlePress: (...args: any[]) => void;
  size?: number | undefined;
  color?: string | undefined;
}

const PressableIcon = ({ iconName, handlePress, size, color }: PressableIconProps) => {
  return (
    <Pressable onPress={handlePress}>
      <Icon as={<MaterialIcons name={iconName} />} size={size ? size : 5} mr="2" color={color ? color : 'muted.400'} />
    </Pressable>
  );
};

export default PressableIcon;
