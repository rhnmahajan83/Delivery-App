import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Div,
} from 'react-native';
import * as Constants from '../constants/constants'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      dummyResponse: ''
    };
  }

  onSubmit() {
    console.warn('Submit hit..', Constants.URL);

    if(this.state.dummyResponse.name != 1){
      this.props.navigation.navigate('Home')
    }
    return fetch(Constants.GETUSERS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: {
        'email': this.state.username,
        'password': this.state.password,
      },
    })
      .then(response => {
        console.warn('Response: ', response.data);
      })
      .catch(error => {
        console.error('Catch block: ', error);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require('../resources/circuit.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>
        <View style={styles.container}>
          <Text style={styles.textheader}>LOGIN</Text>
          <View style={styles.container2}>
            <TextInput
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />

            <Button
              title={'Login'}
              style={styles.input}
              onPress={() => this.onSubmit()}
            />
          </View>

          <View style={styles.parentButtonContainer}>
                <Text style={styles.textheader1}>Not A Member?</Text>
            </View>
          <Button
            title={'Register'}
            style={styles.input}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    borderColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  textheader: {
    width: 200,
    height: 44,
    paddingLeft: 65,
    marginBottom: 10,
    fontSize: 20,
    color: 'white',
  },
  textheader1:{
    color: 'white'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default LoginScreen;
