import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class Profile extends Component {

static navigationOptions ={
    drawerLabel:"Dados OMS"
}

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.texto}>Inserir dados da OMS</Text>
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
