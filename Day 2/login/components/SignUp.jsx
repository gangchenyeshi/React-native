import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const SignUp = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Create Account</Text>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
});