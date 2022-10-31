import React from 'react';
import { FormControl, Text, Input } from 'native-base';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import PressableIcon from './PressableIcon';

interface FormInputProps {
  label: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  value: string;
  onChangeText: (...args: any[]) => void;
  disabled?: boolean | undefined;
  icon?: React.ReactElement<typeof PressableIcon> | undefined;
  type?: 'text' | 'password' | undefined;
  style?: StyleProp<ViewStyle>;
}

const FormInput = ({
  label,
  placeholder,
  keyboardType,
  value,
  icon,
  type,
  disabled = false,
  onChangeText,
}: FormInputProps) => {
  return (
    <FormControl>
      <FormControl.Label>
        <Text>{label}</Text>
      </FormControl.Label>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        type={type ? type : 'text'}
        InputRightElement={icon}
        isDisabled={disabled}
      />
    </FormControl>
  );
};

export default FormInput;
