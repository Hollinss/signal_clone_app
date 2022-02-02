import React, {useEffect, useState} from 'react';
import styles from "../style";
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {auth} from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (authUser)=>{
            if(authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe; //unsubscribe if a remount occurs in order to improve performance
    }, []); //adding dependency array because want useEffect to trigger on mount only

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => alert(error));
    }
    return (
        <KeyboardAvoidingView behavior='padding'  style={styles.container}>
            <StatusBar style="light" />
            <Image source = {{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }}
            style={{ width: 150, height: 150 }} />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                       autoFocus
                       type="email"
                       value={email}
                       onChangeText={(text) => setEmail(text)}
                />
                <Input placeholder="Password"
                       secureTextEntry
                       type="password"
                       value={password}
                       onChangeText={(text) => setPassword(text)}
                       onSubmitEditing={signIn}/>
            </View>

            <Button containerStyle={styles.button} onPress={signIn}
                    title="Login" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
            <View style={{height: 110}} />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;