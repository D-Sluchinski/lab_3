import React, { useState } from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import IncrementButton from '../component/increment';
import DecrementButton from '../component/decrement';


const Lab3 = () => {
    const[ value, setValue ] = useState<number>(0);
    return (
        <View style={style.container}>
            <Text style={style.text}>My Value: {value}</Text>
            <View style={StyleSheet.subContainer}>
                <Increment value={value} setValue={setValue}/>
                <Decrement value={value} setValue={setValue}/>
            </View>
        </View>
    )
}

export default Lab3;

const stykes = StyleSheet.create({
    container:{
        
    }
})