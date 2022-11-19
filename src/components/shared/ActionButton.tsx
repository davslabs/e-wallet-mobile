import React from 'react';
import { Button, Text, Center } from 'native-base';

interface ActionButtonProps {
  text: string;
  handlePress: (...args: any[]) => void;
}

const ActionButton = ({ text, handlePress }: ActionButtonProps) => {
  return (
    <Center>
      <Button w="100%" onPress={handlePress}>
        <Text color="white">{text.toUpperCase()}</Text>
      </Button>
    </Center>
  );
};

export default ActionButton;
