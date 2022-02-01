import React, {useLayoutEffect, useState} from 'react';
import styles from "../style";
import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CustomListItem from "../components/CustomListItem";
import {Avatar} from "react-native-elements";
import {auth} from "../firebase";

const HomeScreen = ( {navigation} ) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "green" },
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
              </View>
            ),
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;