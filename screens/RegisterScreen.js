import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground,TextInput, Div } from 'react-native';
import * as Constants from '../constants/constants';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      emial: '',
      phone: '',
      confirmPassword: '',
    };
  }

  // componentDidMount() {
  //   fetch('https://demo7437464.mockable.io/getUser')
  //     .then(response => console.warn(response))
  //     .catch(error => console.error('CDM', error));
  // }

  onSubmit() {
    console.warn('Submit hit..', Constants.URL);

    return fetch(Constants.URL + '/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        userNetworkName: this.state.username,
      }),
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
       <ImageBackground source={require('../resources/circuit.png')} style={{width: '100%', height: '100%',resizeMode: 'cover'}}>
      <View style={styles.container}>
      <Text style={styles.textheader}>Register</Text>
        <View style={styles.container2}>
          
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
        

       
          
          <TextInput
            style={styles.input}
            placeholder="Email Id"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
      

       
          <TextInput
            style={styles.input}
            placeholder="Phone"
            onChangeText={phone => this.setState({ phone })}
            value={this.state.phone}
          />
        

        
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        

       
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm Password"
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />
          <View style={styles.parentButtonContainer}>
            <Button
              style={styles.button}
              title="Sign up"
              onPress={() => this.onSubmit()}
            />
            </View>

        </View>
        <View style={styles.parentButtonContainer}>
                <Text style={styles.textheader1}>Already A Member?</Text>
            </View>
            <Button
              style={styles.button}
              title="Login"
              onPress={() => this.props.navigation.push('Login')}
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
    borderWidth:1,
    borderColor:'lightblue',
    padding:10,
    borderRadius:10,
    margin:10,
  },
  textheader:{
    width: 200,
    height: 44,
    paddingLeft: 65,
    marginBottom: 10,
    fontSize:20,
    color:'white',
  },
  textheader1:{
    color:'white'
  },
  button:{
    backgroundColor:'black'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  parentButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RegisterScreen;
