import React, { Component } from 'react'
import { View } from 'react-native'

import axios from 'axios'


const handleLogin = (credentials) => {
    const url = 'https://intense-tor-41906.herokuapp.com/user/signin';

    axios
    .post(url, credentials)
    .then((response) => {
        const result = response.data;
        const {message, status, data} = result;

        if(status !== 'sucess'){
            console.log(message);
        }
        else {
            //navigation.navigate('Welcome', {...data[0]});
        }
    })
    .catch(error => {
        console.log(error.JSON());
    })
}

export class Login extends Component {
    
    render() {
        return (
            <View></View>
        )
    }
}

export default Login




