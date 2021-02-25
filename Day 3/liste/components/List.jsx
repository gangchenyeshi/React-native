import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';


const List = () => {
    const [countries, setCountries] = useState([]);

    // const renderItem = ({ item }) => {
    //     console.log("Item  :", item);
    //     return (
    //         <View style={styles.item}>
    //             <Text style={styles.countryName}>{item.name}</Text>
    //             <Text style={styles.countryCapital}>{item.capital}</Text>
    //             <Image style={styles.countryImage} source={{uri: item.flag}}/>
    //         </View>
    //     );
    // };

    useEffect(() => {
        fetch(`http://restcountries.eu/rest/v2/all`)
            .then((response) => { return response.json() })
            .then((response) => {
                console.log(response);
                setCountries(response)
            })
            .catch(() => {
                //messager error here..
            })
    }, [])


    return (
        // <View>
        //     {countries.map((country) => {
        //         console.log(country)
        //         return <Text>{country.name}, {country.capital}</Text>
        //     })}
        // </View>
        <View >
            {/* <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            /> */}
            <FlatList
                data={countries}
                renderItem={({item}) => {
                    return (
                        <>
                        <Text>{item.name}</Text>
                        <Text>{item.capital}</Text>
                        <Image style={styles.flag}source={{ uri : item.flag}}/>
                        </>
                    )
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height : 300,
        width : 400,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : 'black',
        border : 2,
        borderRadius : 10,
        backgroundColor : 'grey',
    },
    countryName: {
        fontSize: 30,
        fontWeight : 'bold',
    },
    countryCapital: {
        fontSize: 24,
    },
    flag : {
        width : 300,
        height : 200,
        resizeMode : 'stretch',
    },
});

export default List;