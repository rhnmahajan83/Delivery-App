import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      fileType: '',
      fileName: '',
      fileSize: '',
    };

  }

  componentDidMount() {

    this.setState({
      dataSource: [
        { "id": "1", "title": "Star Wars", "lat": "1977", "lng": "3454" },
        { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
        { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
        { "id": "4", "title": "Inception", "releaseYear": "2010" },
        { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
      ]
    })

    // return fetch('https://facebook.github.io/react-native/movies.json', {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {

    //     this.setState({
    //       isLoading: false,
    //       dataSource: responseJson.movies,
    //     }, function(){
    //       console.log("Data::",this.state.dataSource)
    //     });

    //   })
    //   .catch((error) =>{
    //     console.error('Error:::',error);
    //   });
  }

  render() {
    return (
      
        <ImageBackground
          source={require('../resources/circuit.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>


          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Map')}
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: 'black',
                  padding: 10,
                  flex: 1
                }}>
                <Image
                  source={require('../resources/map.png')}
                  style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
                />
                <Text style={{ paddingLeft: 10, color: "white" }}>{item.title}</Text>
                <Text style={{ color: "white", paddingLeft: 10 }}>{item.releaseYear}</Text>
              </TouchableOpacity>}
          />

        </ImageBackground>
      
    );
  }
}
export default HomeScreen;
