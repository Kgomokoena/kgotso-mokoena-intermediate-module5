/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as data from '../data/countries.json';

const Explorepage = () => {
  const [randomCountry, setrandomCountry] = useState(
    Math.floor(Math.random() * 196),
  ); //196 countries in the world
  const countryName = data[randomCountry].name;
  const countryCapital = data[randomCountry].capital;
  const countryRegion = data[randomCountry].region;
  const countryCode = data[randomCountry].alpha3Code;
  const callingCode = data[randomCountry].callingCodes;
  const imageUri = 'https://countryflagsapi.com/png/' + countryCode;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Country: {countryName}</Text>
      <Text style={styles.heading}>Capital City: {countryCapital}</Text>
      <Text style={styles.heading}>Region: {countryRegion}</Text>
      <Text style={styles.heading}>Country Code: {countryCode}</Text>
      <Text style={styles.heading}>Calling Code: +{callingCode}</Text>
      <Image style={styles.flag} source={{uri: imageUri}} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            setrandomCountry(Math.floor(Math.random() * 196));
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {fontWeight: 'bold', fontSize: 16},
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

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },

  buttons: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#64b5f6',
    minWidth: '30%',
    textAlign: 'center',
    margin: 14,
    alignItems: 'center',
  },

  buttonContainer: {flexDirection: 'row', margin: 30},
});

export default Explorepage;
