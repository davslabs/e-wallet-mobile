import React, { useState } from 'react';
import { IconButton } from 'native-base';
import { Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import SideButtonInput from './SideButtonInput';

interface DateInputProps {
  label: string;
  value?: Date;
  helpText?: string;
  onChangeHandler: (...args: any[]) => void;
}

const DateInput = ({ label, value, onChangeHandler, helpText }: DateInputProps) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate instanceof Date ? selectedDate : new Date();
    setShow(false);
    setDate(currentDate);
    onChangeHandler(currentDate);
  };

  const showMode = (currentMode: any) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SideButtonInput
      label={label}
      keyboardType="default"
      value={value ? value.toLocaleDateString() : date.toLocaleDateString()}
      onChangeText={onChange}
      helpText={helpText}
      sideButton={
        <>
          <IconButton
            variant="solid"
            _icon={{
              as: MaterialIcons,
              name: 'date-range',
            }}
            onPress={showDatepicker}
            borderLeftRadius="none"
            borderRightRadius="md"
            m="0"
          />
          {show && <DateTimePicker is24Hour value={date} onChange={onChange} />}
        </>
      }
    />
  );
};

export default DateInput;
