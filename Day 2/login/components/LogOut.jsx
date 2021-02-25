import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const LogOut = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Create Account</Text>
        </View>
    )
}

export default LogOut;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
});