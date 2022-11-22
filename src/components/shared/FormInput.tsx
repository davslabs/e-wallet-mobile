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
  width?: any;
  disabled?: boolean | undefined;
  icon?: React.ReactElement<typeof PressableIcon> | undefined;
  type?: 'text' | 'password' | undefined;
  iconLeft?: React.ReactElement<typeof Icon> | undefined;
  helpText?: string | undefined;
  maxLength?: number | undefined;
}

const FormInput = ({
  label,
  placeholder,
  keyboardType,
  value,
  icon,
  iconLeft,
  helpText,
  onChangeText,
  width = 'full',
  disabled = false,
  type = 'text',
  maxLength,
}: FormInputProps) => {
  return (
    <FormControl width={width}>
      <FormControl.Label>
        <Text>{label}</Text>
      </FormControl.Label>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        type={type}
        InputRightElement={icon}
        InputLeftElement={iconLeft}
        isDisabled={disabled}
        maxLength={maxLength}
      />
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

export default FormInput;
