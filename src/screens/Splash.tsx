import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Splash() {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

export default Splash;
