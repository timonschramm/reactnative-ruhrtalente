import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import {Image, View, StyleSheet, Text} from 'react-native'
import { Icon } from 'react-native-elements'
const styles = StyleSheet.create({
    background: {
        width: '100%',
        paddingLeft: 30,
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 130,
        height: 50,
        resizeMode: 'contain'
    },
    burgermenu: {
        paddingRight: 30,
        marginVertical: 'auto'
    }
})

export class RealMenu extends Component {
    render() {
        return (

           <View style={styles.background}>
               <Image 
                source={require('../assets/blauesLogo.png')}
                style={styles.image}
                />
                <TouchableOpacity>
                    <Icon
                        name="menu"
                        color = '#3395D2'
                        style={styles.burgermenu}
                    />
                </TouchableOpacity>
           </View>
        )
    }
}

export default RealMenu
