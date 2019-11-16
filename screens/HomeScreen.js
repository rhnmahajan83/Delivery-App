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
// import { DrawerNavigator } from 'react-navigation';
import {
  DocumentPicker,
  DocumentPickerUtil,
} from 'react-native-document-picker';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      fileType: '',
      fileName: '',
      fileSize: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    //Opening Document Picker
    console.log('res : ');
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()],
        //All type of Files DocumentPickerUtil.allFiles()
        //Only PDF DocumentPickerUtil.pdf()
        //Audio DocumentPickerUtil.audio()
        //Plain Text DocumentPickerUtil.plainText()
      },
      (error, res) => {
        this.setState({ fileUri: res.uri });
        this.setState({ fileType: res.type });
        this.setState({ fileName: res.fileName });
        this.setState({ fileSize: res.fileSize });

        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.fileName);
        console.log('File Size : ' + res.fileSize);
      }
    );
  }
  componentDidMount(){

// this.setState({dataSource: {
//     "movies": [
//       { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
//       { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
//       { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
//       { "id": "4", "title": "Inception", "releaseYear": "2010" },
//       { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
//     ]
//   }})

    return fetch('https://facebook.github.io/react-native/movies.json', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){
          console.log("Data::",this.state.dataSource)
        });

      })
      .catch((error) =>{
        console.error('Error:::',error);
      });
  }

  render() {
    return (
      <View style={{ paddingTop:10}}>
          <ImageBackground
      source={require('../resources/circuit.png')}
      style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>

     
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: 'black',
            padding:10,
            flex:1
          }}>
          <Image
            source={require('../resources/map.png')}
            style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
          />
          <Text style={{ paddingLeft:10, color: "white"}}>{item.title}</Text>
          <Text style={{color:"white", paddingLeft:10}}>{item.releaseYear}</Text>
        </TouchableOpacity>}
        />
    
       </ImageBackground>
       </View>
    );
  }
}
export default HomeScreen;
