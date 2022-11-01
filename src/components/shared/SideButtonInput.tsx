import React from 'react';
import { FormControl, Text, Stack, InputGroup, Input, InputRightAddon, Button } from 'native-base';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import Form from './PressableIcon';

interface FormInputProps {
  label: string;
  keyboardType: KeyboardTypeOptions;
  value: string;
  onChangeText: (...args: any[]) => void;
  type?: 'text' | 'password' | undefined;
  helpText?: string | undefined;
  sideButton?: React.ReactElement<typeof Button> | undefined;
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
              base: '84%',
              md: '100%',
            }}
          />
          <InputRightAddon bg="primary.600" w="16%" p="0" children={sideButton} />
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
