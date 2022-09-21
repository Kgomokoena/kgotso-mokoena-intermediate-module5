/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Aboutpage = () => {
  return (
    <View style={styles.container}>
      <Text>MAPIE</Text>
      <Text>Version 1.0.0</Text>
      <Text>By Trilogy Innovative Solutions</Text>
      <Text>www.trilogysolution.co.za</Text>
      <Image style={styles.flag} source={{uri: 'asset:/launch_screen.png'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flag: {
    width: 350,
    height: 200,
    resizeMode: 'center',
    backgroundColor: 'transparent',
  },
});

export default Aboutpage;
