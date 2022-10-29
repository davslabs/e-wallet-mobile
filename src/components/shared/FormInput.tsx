import React from 'react';
import { FormControl, Text, Input } from 'native-base';
import { KeyboardTypeOptions } from 'react-native';
import PressableIcon from './PressableIcon';

interface FormInputProps {
  label: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  value: string;
  onChangeText: (...args: any[]) => void;
  icon?: React.ReactElement<typeof PressableIcon> | undefined;
  type?: 'text' | 'password' | undefined;
}

const FormInput = ({ label, placeholder, keyboardType, value, icon, type, onChangeText }: FormInputProps) => {
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
      />
    </FormControl>
  );
};

export default FormInput;
