import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  DrawerNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
  },
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  }
);
const MyDrawerNavigator = new DrawerNavigator(
  {
    Home: {
      screen: AppNavigator,
    },
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);
