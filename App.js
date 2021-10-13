import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Device from 'expo-device';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{Device.deviceName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
  },
});

export default App;
