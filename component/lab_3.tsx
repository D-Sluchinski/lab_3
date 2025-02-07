import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Increment from '../component/increment';
import Decrement from '../component/decrement';
 
 
const Lab3 = () => {
    const[ value, setValue ] = useState<number>(0);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Value: {value}</Text>
            <View style={styles.subContainer}>
                <Increment value={value} setValue={setValue}/>
                <Decrement value={value} setValue={setValue}/>
            </View>
        </View>
    )
}
 
export default Lab3;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%'
    },
    text: {
        fontSize: 30,
        marginBottom: 20}
});
