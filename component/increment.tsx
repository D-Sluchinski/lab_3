import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type IncrementProps = { value: number; setValue: (value: number) => void };

const Increment: React.FC<IncrementProps> = ({ value, setValue }) => {
    const handleIncrement = () => {
        setValue(value + 1);
    };


    return (
        <View>
            <View style={styles.box}>
                <TouchableOpacity onPress={handleIncrement}>
                    <Text style={styles.text}>Increment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Increment;

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
    },
});
