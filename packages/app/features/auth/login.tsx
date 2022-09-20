import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Hoverable } from 'react-native-web-hooks';
import { useHover, useFocus, useActive } from 'react-native-web-hooks';
import { Row } from 'dripsy';
import { AntDesign } from "@expo/vector-icons";
import MagicModal from '../../components/magicModal'
import Web3 from "web3";
import { ConnectExtension } from "@magic-ext/connect";
import {magic} from "../../../../apps/next/lib/magic"


  const web3 = new Web3(magic.rpcProvider);

const createLogger = (...msg) => () => {
    console.log(...msg);
};

export default function App() {
    const ref = useRef(null);
    const [account, setAccount]: any = useState(null);
    const [width, setWindowWidth] = useState(Dimensions.get('window').width)

    const login = async () => {
        web3.eth
          .getAccounts()
          .then((accounts) => {
            setAccount(accounts?.[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        width > 700 ? 
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Hoverable>
                {isHovered => (
                    <Pressable onPress={login} accessible style={[styles.button, { backgroundColor: isHovered ? 'yellow' : 'transparent' }]}>
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
            <MagicModal login={login} account={account} setAccount={setAccount}/>
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