import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Home = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
});