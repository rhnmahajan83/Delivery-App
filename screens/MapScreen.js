import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Button,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps'

class MapScreen extends Component {
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
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        })
    }

    render() {
        return (
            <View>
                <MapView style={styles.mapStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
export default MapScreen;
