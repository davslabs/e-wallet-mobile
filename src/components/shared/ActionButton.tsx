import React from 'react';
import { Button, Text } from 'native-base';

interface ActionButtonProps {
  text: string;
  handlePress: (...args: any[]) => void;
}

const ActionButton = ({ text, handlePress }: ActionButtonProps) => {
  return (
    <Button w="100%" onPress={handlePress}>
      <Text color="white">{text.toUpperCase()}</Text>
    </Button>
  );
};

export default ActionButton;
