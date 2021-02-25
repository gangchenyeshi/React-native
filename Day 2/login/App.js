import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './components/Login';
// import Home from './components/Home';
// import SignUp from './components/SignUp';
// import LogOut from './components/LogOut';

export default function App() {
  return (
    <View style={styles.container}>
      <LogIn />
      {/* <HomeScreen />
      <CreateAccountScreen /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
