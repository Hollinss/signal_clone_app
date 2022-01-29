import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import styles from './style.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#63a4ff" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions = {globalScreenOptions}>
              <Stack.Screen
                  options = {{
                      title: "Sign Up Screen",
                  }}
                  name = 'Login'
                  component = {LoginScreen} />
              <Stack.Screen
                  options = {{
                      title: "Register Screen",
                  }}
                  name = 'Register'
                  component = {RegisterScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


