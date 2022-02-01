import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from './style.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

//NOTE: In React Native, divs are Views

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#63a4ff" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions = {globalScreenOptions}>
              <Stack.Screen
                  options = {{
                      title: "Sign Up Screen",
                  }}
                  name = 'Login'
                  component = {LoginScreen} />
              <Stack.Screen
                  options = {{
                      title: "Register",
                  }}
                  name = 'Register'
                  component = {RegisterScreen} />
              <Stack.Screen
                  options = {{
                      title: "Home",
                  }}
                  name = 'Home'
                  component = {HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


