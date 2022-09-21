/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
      <Text style={styles.heading}>
        To which country does the below flag belong:
      </Text>
      <Image style={styles.flag} source={{uri: imageUri}} />
      <TextInput style={styles.answer} placeholder="Answer Here" />
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              setrandomCountry(Math.floor(Math.random() * 196));
            }}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
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

  answer: {
    borderBottomColor: '#64b5f6',
    borderBottomWidth: 1,
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
    margin: 25,
    alignItems: 'center',
  },

  buttonContainer: {flexDirection: 'row', margin: 30},
});

export default Quizpage;
