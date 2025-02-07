import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type DecrementProps = { value: number; setValue: (value: number) => void };

const Decrement: React.FC<DecrementProps> = ({ value, setValue }) => {
    const handleDecrement = () => {
        setValue(value - 1);
    };


    return (
        <View>
            <View style={styles.box}>
                <TouchableOpacity onPress={handleDecrement}>
                    <Text style={styles.text}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Decrement;

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 50,
        backgroundColor: "red",
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
