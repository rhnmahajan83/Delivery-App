import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MapScreen from './screens/MapScreen';
import { createBottomTabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Register: { screen: RegisterScreen },
    MapDisplay: {screen: MapScreen}
  },
  {
    initialRouteName: 'Login',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#888',
      activeBackgroundColor: '#FFF', // iOS
      inactiveBackgroundColor: '#DDD', // iOS
      pressColor: '#e91e63', // Android
      indicatorStyle: { // Android
        backgroundColor: '#242134',
      },
      style: {
        backgroundColor: '#EEE', // Android
      },
    },
  }
);
