/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Quizpage from './views/Quizpage';
import Explorepage from './views/Explorepage';
import Aboutpage from './views/Aboutpage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Quiz"
        screenOptions={{headerStyle: {backgroundColor: '#64b5f6'}}}>
        <Tab.Screen
          name="Quiz"
          component={Quizpage}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="question-circle" color={'#64b5f6'} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explorepage}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="globe" color={'#64b5f6'} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={Aboutpage}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="info-circle" color={'#64b5f6'} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
