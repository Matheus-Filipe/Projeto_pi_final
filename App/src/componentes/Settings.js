import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class Settings extends Component {

static navigationOptions ={
    drawerLabel:"Sobre Nos"
}

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.texto}>Sobre Nos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: `center`,
        alignContent:`center`,
      
      },
      texto:{
        color:`#000`
      }
})
