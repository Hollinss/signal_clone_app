import React, {useLayoutEffect, useState} from 'react';
import styles from "../style";
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {auth} from "../firebase"

const HomeScreen = () => {
    return (
        <View>
            <Text>HomePage</Text>
        </View>
    );
};

export default HomeScreen;