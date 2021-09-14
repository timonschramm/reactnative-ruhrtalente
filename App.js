import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feed from './components/Feed'
import RealMenu from './components/RealMenu';
import Upcoming from './components/Upcoming';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name == 'Feed') {
              iconName = focused
              ? 'view-list'
              : 'view-list';
            }
            else if (route.name == 'Profil') {
              iconName = focused
              ? 'receipt-long'
              : 'receipt-long';
            } 
            return <Icon name={iconName}/>;
          }
          
        })}
      >
        <Tab.Screen 
          name="Feed" 
          component={Feed}
          options= {{ headerTitle: props => <Image source={require('./assets/blauesLogo.png')} style={styles.image}/>}}
        />
        <Tab.Screen name="Profil" component={Upcoming}/>
      </Tab.Navigator>
      {/* <View style={styles.container}>
        <RealMenu />
        <MenuBar />
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    width: '100%',
    height: '95%'
  },
  image: {
    width: 130,
    height: 50,
    resizeMode: 'contain'
  }
});
