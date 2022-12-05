import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({backgroundColor, onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor: {backgroundColor}}]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default CustomButton;
