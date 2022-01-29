import React, {useState} from 'react';
import styles from 'signal_clone_app/style.js';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {

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
                       onChangeText={(text) => setPassword(text)}/>
            </View>

            <Button containerStyle={styles.button} onPress={signIn}
                    title="Login" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
            <View style={{height: 110}} />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;