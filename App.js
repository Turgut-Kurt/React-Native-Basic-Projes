import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Platform} from 'react-native';
import { createStackNavigator ,createAppContainer} from "react-navigation";
import LineView from './src/components/LineView';
import ActionButton from 'react-native-action-button';
import Icon from "react-native-vector-icons/Ionicons";
export default class App extends Component{
  render(){
    return (
        <AppContainer />
    );
  }
}
class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Örnek Proje',
    headerStyle: {
      backgroundColor: '#2E99CF',
    },
    headerTintColor: 'white',
    headerRight: (
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
              style={{height:30,width:30}}
              source={require('./src/assets/icon.jpg')}
          />
        </TouchableOpacity>
    ),
  };
  render(){
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#2E99CF'/>
          <LineView name='md-checkmark' text='Satır 4' color='red' backgroundColor='black'/>
          <LineView text='Satır 6' color='white' backgroundColor='blue'/>
          <LineView text='Satır 2' color='yellow' backgroundColor='green'/>
          <LineView text='Satır 5' color='yellow' backgroundColor='red'/>
          <LineView text='Satır 7' color='blue' backgroundColor='pink'/>
          <LineView text='Satır 1' color='yellow' backgroundColor='purple'/>
          <LineView text='Satır 3' color='purple' backgroundColor='blue'/>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item size={45} buttonColor='#9b59b6' title="Yeni Taslak" onPress={() => console.log("notes tapped!")}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item size={45} buttonColor='#3498db' title="Bildirimler" onPress={() => {}}>
                    <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item size={45} buttonColor='#1abc9c' title="Bütün Taslaklar" onPress={() => {}}>
                    <Icon name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
  }
}
const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen
  }
});
const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fafafa',
    justifyContent: 'flex-start',
    alignItems : 'flex-start',
    paddingHorizontal:'1%',
  },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

