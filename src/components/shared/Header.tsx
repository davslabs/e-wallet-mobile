import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HStack } from 'native-base';
import React from 'react';
import GoBackButton from './GoBackButton';

interface HeaderProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  back:
    | {
        title: string;
      }
    | undefined;
}

const Header = ({ navigation, back }: HeaderProps) => {
  return <HStack alignItems="flex-start">{back ? <GoBackButton onPress={navigation.goBack} /> : undefined}</HStack>;
};

export default Header;
