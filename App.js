import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card } from "react-native-elements";
import {Image } from "react-native";
import { SocialIcon, SocialIconProps } from 'react-native-elements';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './screens/navigation';



export default function App() {

  return (
           
              <NavigationContainer>
                <MyStack></MyStack>
              </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  
  },
});
