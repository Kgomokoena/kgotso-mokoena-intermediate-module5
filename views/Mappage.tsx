/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import * as data from '../data/countries.json';

const Mappage = () => {
  const [randomCountry, setrandomCountry] = useState(
    Math.floor(Math.random() * 196),
  ); //196 countries in the world
  const countryName = data[randomCountry].name;
  const countryCapital = data[randomCountry].capital;
  const countryRegion = data[randomCountry].region;
  const countryCode = data[randomCountry].alpha3Code;
  const imageUri = 'https://countryflagsapi.com/png/' + countryCode;

  return (
    <View style={styles.container}>
      <Text>Country Name: {countryName}</Text>
      <Text>Capital City: {countryCapital}</Text>
      <Text>Region: {countryRegion}</Text>
      <Text>Country Code: {countryCode}</Text>
      <Image style={styles.flag} source={{uri: imageUri}} />
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
});

export default Mappage;
