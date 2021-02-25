import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.containerText}>
        <Text style={[styles.text, styles.firstPara]}>Hello this is react native App</Text>
        <Text style={[styles.text, styles.secondPara]}>It Is Day One</Text>
        <Text style={[styles.text, styles.thirdPara]}>Installation the React Native in PC</Text>
        </View>
        <Image style={styles.images} source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }} />
        <Image style={styles.images} source={require('./image/konexioLogo.png')} />
        <Pressable style={styles.press} onPress={() => {alert("Hello !")}}>
          <Text style={styles.pressText}>
            Click
          </Text>
        </Pressable>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    backgroundColor: 'white',
  },
  text: {
    marginVertical : 80
  },
  firstPara: {
    fontSize: 30,
  },
  secondPara: {
    textAlign: 'center',
  },
  thirdPara: {
    fontWeight: 'bold',
  },
  images: {
    width: 280,
    height: 80,
    margin: 20
  },
  press : {
    backgroundColor : 'black',
    height : 30,
    width : 100,
    height : 40
  },
  pressText : {
    color : 'white',
    fontSize : 20,
    padding : 10,
  }
});
