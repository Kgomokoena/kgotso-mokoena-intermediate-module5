/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
