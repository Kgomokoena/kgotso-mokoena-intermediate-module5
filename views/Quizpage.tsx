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
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import * as data from '../data/countries.json';

const Quizpage = () => {
  const [randomCountry, setrandomCountry] = useState(
    Math.floor(Math.random() * 196),
  ); //196 countries in the world
  const [Iconcolor, setIconcolor] = useState('#ffd700');
  const [theIcon, settheIcon] = useState('question-circle');
  const [textValue, settextValue] = useState('');
  const countryCode = data[randomCountry].alpha3Code;
  const imageUri = 'https://countryflagsapi.com/png/' + countryCode;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        To which country does the below flag belong:
      </Text>
      <Image style={styles.flag} source={{uri: imageUri}} />
      <TextInput
        style={styles.answer}
        placeholder="Answer Here"
        onChangeText={newText => settextValue(newText)}
        defaultValue={textValue}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              const theAnswer = textValue.toLowerCase();
              const theCountryname = data[randomCountry].name.toLowerCase();

              if (theAnswer === theCountryname) {
                setIconcolor('#00FF00');
                settheIcon('check-circle');
              } else {
                setIconcolor('#ff0000');
                settheIcon('times-circle');
              }
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              setrandomCountry(Math.floor(Math.random() * 196));
              settheIcon('question-circle');
              setIconcolor('#ffd700');
            }}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FontAwesome name={theIcon} color={Iconcolor} size={40} />
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
    marginTop: 15,
  },

  flag: {
    width: 350,
    height: 200,
    resizeMode: 'center',
  },

  answer: {
    borderBottomColor: '#64b5f6',
    borderBottomWidth: 1,
    marginBottom: 17,
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
    margin: 5,
    alignItems: 'center',
  },

  buttonContainer: {flexDirection: 'row', margin: 20},
});

export default Quizpage;
