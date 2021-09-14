import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OneEvent from './OneEvent';
import RealMenu from './RealMenu';

export class MenuBar extends Component {
    render() {
        return (
            <ScrollView>
                <OneEvent/>
                <OneEvent/>
                <OneEvent/>
            </ScrollView>
        )
    }
}

export default MenuBar
