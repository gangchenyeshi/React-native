import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.LogInSuccess}>
                LogIn Successful !
      </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    LogInSuccess : {
        alignItems: 'center',
        fontSize : 24,
    }
});


export default Home;