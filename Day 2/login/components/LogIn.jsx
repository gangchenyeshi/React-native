// import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { builtinModules } from 'module';

const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    
    return (
        <View style={StyleSheet.container}>
            <View>
                <Text stye={styles.LoginText}>Log In</Text>
            </View>
            <View>
                <Text>UserName :</Text>
                <TextInput style={styles.TextInput}
                    placeholder = "Enter UserName"
                    onChangeText={(value) => setUserName(value)}
                    value={userName} />
            </View>
            <View>
                <Text>Password :</Text>
                <TextInput style={styles.TextInput}
                    placeholder = "Enter Password"
                    onChangeText={(value) => setPassword(value)}
                    value={password} />
            </View>
            <View>
                <Pressable style={styles.logInButton} >
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
            </View>
            <View>
                <Text>UserName : {userName}, Password : {password}</Text>
            </View>
        </View>
    )
}

export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LoginText: {
        textAlign: 'center',
    },
    TextInput: {
        width: 200,
        padding : 8,
        marginVertical : 10,
        borderColor: '#777',
        borderWidth: 1,
    },
    logInButton : {
        width : 100,
        height : 40,
        backgroundColor : 'blue',
    },
    buttonText : {
        textAlign : 'center',
    }
});