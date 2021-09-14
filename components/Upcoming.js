import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Upcoming extends Component {
    render() {
        return (
           <View>
               <View>
                    <Text>Max Mustermann</Text>
                    <Text>maxmustermann@gmail.com</Text>
                    <Text>Duisburg</Text>
               </View>
               <View>
                    <Text>Veranstaltung 1</Text>
                   <Text>Veranstaltung 2</Text>
               </View>
           </View>
        )
    }
}

export default Upcoming
