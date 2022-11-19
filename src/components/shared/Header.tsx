import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HStack } from 'native-base';
import React from 'react';
import GoBackButton from './GoBackButton';

interface HeaderProps {
  navigation: StackNavigationProp<ParamListBase>;
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
