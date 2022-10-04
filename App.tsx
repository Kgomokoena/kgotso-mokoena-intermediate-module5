/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import Quizpage from './views/Quizpage';
import Explorepage from './views/Explorepage';
import Aboutpage from './views/Aboutpage';
import Mapspage from './views/Mapspage';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Quiz"
          screenOptions={{headerStyle: {backgroundColor: '#64b5f6'}}}>
          <Tab.Screen
            name="Quiz"
            component={Quizpage}
            options={{
              tabBarIcon: () => (
                <FontAwesome
                  name="question-circle"
                  color={'#64b5f6'}
                  size={30}
                />
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
            name="Map"
            component={Mapspage}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="map-pin" color={'#64b5f6'} size={30} />
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
    </Provider>
  );
};

export default App;
