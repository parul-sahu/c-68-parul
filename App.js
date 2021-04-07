
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from "./screens/transaction"
import SearchScreen from "./screens/search"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends Component {
  render(){
  return (
    
      <AppContainer/>
  
  );
  }
}

const TabNavigator = createBottomTabNavigator({
screen1: {screen:TransactionScreen},
screen2: {screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
