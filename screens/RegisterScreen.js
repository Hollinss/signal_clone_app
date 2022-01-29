import React, {useState} from 'react';
import styles from 'signal_clone_app/style.js';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");

    return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
           <StatusBar style="light" />
        <Text h3 style={ {marginBottom: 50} }>
            Create a Signal Account
        </Text>
           <View style={styles.inputContainer}>
               <Input
               placeholder="Full Name"
               autoFocus
               type='text'
               value={name}
               onChangeText={(text) => setName(text)}
               /><Input
               placeholder="Email"
               type='email'
               value={name}
               onChangeText={(text) => setName(text)}
               /><Input
               placeholder="Full Name"
               type='text'
               value={name}
               onChangeText={(text) => setName(text)}
               /><Input
               placeholder="Full Name"
               type='text'
               value={name}
               onChangeText={(text) => setName(text)}
               />

           </View>
       </KeyboardAvoidingView>
    );
};

export default RegisterScreen;