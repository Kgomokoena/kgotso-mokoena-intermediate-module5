/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput} from 'react-native';
import * as data from '../data/countries.json';

const Quizpage = () => {
  const [randomCountry, setrandomCountry] = useState(
    Math.floor(Math.random() * 196),
  ); //196 countries in the world
  //const countryName = data[randomCountry].name.toLowerCase();
  const countryCode = data[randomCountry].alpha3Code;
  const imageUri = 'https://countryflagsapi.com/png/' + countryCode;

  return (
    <View style={styles.container}>
      <Text>To which country does the below flag belong:</Text>
      <Image style={styles.flag} source={{uri: imageUri}} />
      <TextInput placeholder="Answer" />
      <Button title="Submit" onPress={() => {}} />
      <Button
        onPress={() => {
          setrandomCountry(Math.floor(Math.random() * 196));
        }}
        title="Next"
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
    width: 350,
    height: 200,
    resizeMode: 'center',
  },

  answer: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
});

export default Quizpage;
