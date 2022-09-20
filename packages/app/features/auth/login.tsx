import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Hoverable } from 'react-native-web-hooks';
import { useHover, useFocus, useActive } from 'react-native-web-hooks';
import { Row } from 'dripsy';
import { AntDesign } from "@expo/vector-icons";

const createLogger = (...msg) => () => {
    console.log(...msg);
};

export default function App() {
    const ref = useRef(null);
    const [width, setWindowWidth] = useState(Dimensions.get('window').width)

    return (
        width > 700 ? 
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Hoverable>
                {isHovered => (
                    <Pressable accessible style={[styles.button, { backgroundColor: isHovered ? 'yellow' : 'transparent' }]}>
                        <Row sx={{alignItems: "baseline"}}>
                            <AntDesign name="mail" size={24} color={isHovered ? 'black' : 'lightgreen'} />
                            <View style={{paddingRight: 10}} />
                            <Text style={[styles.text, { color: isHovered ? 'black' : 'white' }]}>Login with Email</Text>
                        </Row>
                    </Pressable>
                )}
            </Hoverable>
            <View style={styles.buttonContainer} />
            <Hoverable>
                {isHovered => (
                    <Pressable accessible style={[styles.button, { backgroundColor: isHovered ? 'yellow' : 'transparent' }]}>
                        <Row sx={{alignItems: "baseline"}}>
                            <AntDesign name="google" size={24} color={isHovered ? 'black' : 'lightgreen'} />
                            <View style={{paddingRight: 10}} />
                            <Text style={[styles.text, { color: isHovered ? 'black' : 'white' }]}>Login with Google</Text>
                        </Row>
                    </Pressable>
                )}
            </Hoverable>
        </View> : null
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "500",
        fontSize: 18
    },
    buttonContainer: {
        padding: 20
    },
    button: {
        padding: 20,
        backgroundColor: '#583edf',
        justifyContent: 'center',
        borderRadius: 50,
        width: "30%",
        alignItems: "center",
        borderColor: "white",
        borderWidth: 2
    },
})