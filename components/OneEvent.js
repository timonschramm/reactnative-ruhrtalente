import React, { Component } from 'react'
import {View, Button, Text, StyleSheet} from 'react-native'

/*
import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Event from '@material-ui/icons/Event';
*/


import { Icon } from 'react-native-elements'
const styles = StyleSheet.create({
    oneEvent:{
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10
    },
    normalText:{
        color: 'gray'
    },
    header:{
        marginBottom: 4
    },
    heading:{
        fontWeight: 'bold'
    },
    meta:{
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    }
});


export class OneEvent extends Component {
    componentDidMount(){
        const data = require('./data.json')
        console.log(data)
    }
 

    onPressButton(){
        alert("Du hast dich angemeldet!")
    }
    render() {
        return (
            <View style={styles.oneEvent}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.heading}>Exklusive Gesprächsrunde mit NRW-Schulministerin Yvonne Gebauer (online)</Text>
                        <Text style={styles.normalText}>Nur noch wenige Plätze frei!</Text>
                    </View>
                    <View>
                        <View style={styles.meta}>
                            <Icon 
                                name='event'
                            />
                            <Text style={styles.normalText}>17. Okt 2021, 11:00-12:00 Uhr</Text>
                        </View>
                        <View style={styles.meta}>
                            <Icon 
                                name='place'
                            />
                            <Text style={styles.normalText}>Berlin, Pfefferbett Hostel, Christinenstraße 18-19, 10119 Berlin</Text>
                        </View>
                        
                    </View>
                
                </View>
                
                <Text style={styles.normalText}>Wir freuen uns sehr, dich heute auf eine ganz besondere Veranstaltung aufmerksam machen zu können: 
                    Die Ministerin für Schule und Bildung des Landes Nordrhein-Westfalen, Frau Yvonne Gebauer,
                    ist Schirmherrin des RuhrTalente-Schülerstipendiums. Sie lädt daher die RuhrTalente-Stipendiat*innen
                    zu Beginn des neuen Schuljahres zu einer exklusiven Gesprächsrunde ein, um gemeinsam über aktuelle Entwicklungen und Herausforderungen
                    rund um die Themen Schule und Bildung zu sprechen.

                Bitte notiere bei deiner Anmeldung Themen, über die du dich mit Frau Ministerin Gebauer austauschen möchtest. </Text>
                
                <Text style={styles.normalText}>Anmeldung bis</Text>
                <Button onPress={this.onPressButton} title="Jetzt Anmelden!"></Button>
            </View>
        )
    }
}

export default OneEvent
