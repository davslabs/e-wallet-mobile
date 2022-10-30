import { VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const MasterCardIcon = () => {
  return (
    <VStack style={styles.logoContainer}>
      <VStack style={[styles.circle, styles.leftCircle]} />
      <VStack style={[styles.circle, styles.rightCircle]} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  logoContainer: { position: 'relative', marginBottom: 24 },
  rightCircle: { backgroundColor: '#f9a000', position: 'absolute', left: 20 },
  leftCircle: { backgroundColor: '#ed0006', zIndex: 999 },
});

export default MasterCardIcon;
