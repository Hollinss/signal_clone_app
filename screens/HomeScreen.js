import React, {useLayoutEffect, useState} from 'react';
import styles from "../style";
import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomListItem from "../components/CustomListItem";
import {Avatar, Button} from "react-native-elements";
import {auth} from "../firebase";


const HomeScreen = ( {navigation} ) => {

    const signOutUser = () => {
        auth.signOut().then( ()=>{
            navigation.replace("Login")
        } )
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "green" },
            headerLeft: () => (
              <View>
                  <TouchableOpacity>
                      <Button
                          title = "Sign Out"
                        onPress={signOutUser}/>
                        {/*<Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />*/}
                  </TouchableOpacity>
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