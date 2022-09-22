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
      <Text style={styles.heading}>MAPIE</Text>
      <Text style={styles.heading}>Version 1.0.0</Text>
      <Text style={styles.heading}>By Kgotso Mokoena (@5tib0)</Text>
      <Text style={styles.heading}>https://github.com/Kgomokoena</Text>
      <Image
        style={styles.flag}
        source={{uri: 'asset:/launch_screen_new.png'}}
      />
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
    width: 400,
    height: 300,
    resizeMode: 'center',
    backgroundColor: 'transparent',
    margin: 1,
  },
  heading: {fontWeight: 'bold', fontSize: 16},
});

export default Aboutpage;
