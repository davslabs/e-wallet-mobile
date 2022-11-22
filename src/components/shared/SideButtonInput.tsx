import React from 'react';
import { FormControl, Text, Stack, InputGroup, Input, InputRightAddon } from 'native-base';
import { KeyboardTypeOptions } from 'react-native';

interface FormInputProps {
  label: string;
  keyboardType: KeyboardTypeOptions;
  value: string;
  onChangeText: (...args: any[]) => void;
  type?: 'text' | 'password' | undefined;
  helpText?: string | undefined;
  sideButton?: any | undefined;
}

const SideButtonInput = ({
  label,
  keyboardType,
  value,
  helpText,
  onChangeText,
  type = 'text',
  sideButton,
}: FormInputProps) => {
  return (
    <FormControl>
      <FormControl.Label>
        <Text>{label}</Text>
      </FormControl.Label>
      <Stack alignItems="center" w="100%">
        <InputGroup>
          <Input
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            type={type}
            isDisabled
            w={{
              base: '88%',
            }}
          />
          <InputRightAddon bg="primary.600" w="12%" p="0" children={sideButton} />
        </InputGroup>
      </Stack>

      <FormControl.HelperText
        _text={{
          fontSize: 'xs',
        }}
      >
        {helpText}
      </FormControl.HelperText>
    </FormControl>
  );
};

export default SideButtonInput;
