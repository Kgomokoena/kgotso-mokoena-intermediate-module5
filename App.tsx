/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Quizpage from './views/Quizpage';
import Mappage from './views/Mappage';
import Aboutpage from './views/Aboutpage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Quiz">
        <Tab.Screen name="Quiz" component={Quizpage} />
        <Tab.Screen name="Map" component={Mappage} />
        <Tab.Screen name="About" component={Aboutpage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
