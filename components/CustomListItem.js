import React, {useLayoutEffect, useState} from 'react';
import styles from "../style";
import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {ListItem, Avatar } from "react-native-elements";

const CustomListItem = ( { id, chatName, enterChat } ) => {
    return (
        <ListItem>
            <Avatar
            rounded source={{
                uri: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nick.co.uk/shows/avatar/show-cover-avatar.jpg?quality=0.75&height=0&width=480&matte=true&crop=false"
            }}/>
            <ListItem.Content>
                <ListItem.Title style = {{ fontWeight: "500" }}>
                    First Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}
                                    ellipsizeMode="tail">
                    This is a subtitle. Notice how there is ellipses at the end of this line because it is too long
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;