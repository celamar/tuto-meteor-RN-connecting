
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';


const SERVER_URL = 'ws://10.0.2.46:3000/websocket';

console.log('hola estoy en app.js de front');

class App extends Component {
  //pour le serveur
  componentWillMount() {
    Meteor.connect(SERVER_URL); 
     console.log("Coucou toto") ; 
  }


  // ADDED
  handleAddItem() {
    //console.log('TODO: Handle Add Item kjlkh');
    const name = Math.floor(Math.random() * 10); // just generate some random number
    Meteor.call('Items.addOne', { name }, (err, res) => {
    // Do whatever you want with the response
    console.log('Items.addOne', err, res);
    });
  } 

 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Meteor!
        </Text>
        <Text style={styles.instructions}>
          We will use this soon
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;