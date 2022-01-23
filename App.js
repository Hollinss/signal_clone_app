import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import styles from './style.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Screen name = 'Login' component = {LoginScreen} />
            <View style={styles.container}>
              <Text>BUILD THIS BITCH</Text>
              <StatusBar style="auto" />
            </View>
      </NavigationContainer>
  );
}


