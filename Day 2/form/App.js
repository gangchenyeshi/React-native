import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import FormLogin from './components/FormLogIn';
import Home from './components/Home';
const App = () => {
  const [LogInPressButton, SetLogInPressButton] = useState(false)
  return (
    <View style={styles.container}>
      {LogInPressButton ? (
        <View style={styles.logInCard}>
          <Home></Home>
        </View>
      ) : (
          <View style={styles.logInCard}>
            <View style={styles.logInCardBox}>
              <Text style={styles.LoginText}>Log In</Text>
              <Text style={styles.label}>UserName : </Text>
              <FormLogin placeholder={"email"}
                keyboardType={"email-address"}
              />
              <Text style={styles.label}>Password : </Text>
              <FormLogin placeholder={"password"}
                secureTextEntry={true} />
              <Pressable style={styles.loginPress}
                onPress={() => SetLogInPressButton(true)}>
                <Text>LogIn</Text>
              </Pressable>
            </View>
          </View>
        )}
      <StatusBar style="auto" />
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7abbde',
  },
  logInCard: {
    borderRadius: 10,
    backgroundColor: '#dbd0d5',
    height: 300,
    width : 300,
  },
  LoginText: {
    marginVertical: 8,
    fontSize: 32,
    textAlign: 'center',
  },
  label: {
    marginBottom: 3,
    marginLeft: 40,
    fontSize: 20,
  },
  loginPress: {
    fontSize: 24,
    backgroundColor: '#1832d9',
    width: 220,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginBottom: 10,
  },
});

export default App;