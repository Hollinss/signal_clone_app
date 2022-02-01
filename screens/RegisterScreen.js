import React, {useLayoutEffect, useState} from 'react';
import styles from "../style";
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');

    useLayoutEffect( ()=>{
      navigation.setOptions({
          headerBackTitle: "Back to Login",
      });
    }, [navigation]);

    const register = () => {
        //returns a promise to us .then is success and .catch is error
        createUserWithEmailAndPassword(auth, email, password).then(
            (authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nick.co.uk/shows/avatar/show-cover-avatar.jpg?quality=0.75&height=0&width=480&matte=true&crop=false"
                }).then()
            }).catch((error) => alert(error.message));
    };

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
               type="email"
               value={email}
               onChangeText={(text) => setEmail(text)}
               /><Input
               placeholder="Password"
               type="password"
               secureTextEntry
               value={password}
               onChangeText={(text) => setPassword(text)}
               /><Input
               placeholder="Profile Picture URL (optional)"
               type="text"
               value={imageURL}
               onChangeText={(text) => setImageURL(text)}
               onSubmitEditing={register}
               />

           </View>

           <Button containerStyle={styles.button}
                   raised
                   onPress={register}
                   title="Register" />
       </KeyboardAvoidingView>
    );
};

export default RegisterScreen;