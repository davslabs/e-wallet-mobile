import { VStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const VisaIcon = () => {
  return (
    <VStack style={styles.logoContainer}>
      <VStack style={styles.rectangle}>
        <Text style={styles.text}>VISA</Text>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 50,
    height: 34,
    padding: 5,
    paddingTop: 8,
    borderRadius: 3,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 17,
    letterSpacing: 0.53,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  logoContainer: { position: 'relative', marginBottom: 24 },
});

export default VisaIcon;
