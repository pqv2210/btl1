// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native'

class Login extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Demo</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput
                        style={styles.textinput}
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        style={styles.textinput}
                    />
                    <Button
                        title='Login'
                        onPress={() => this.props.navigation.navigate('ListContactScr')}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%',
    },
    title: {

    },
    text: {
        fontSize: 20,
    },
    textinput: {
        height: 40,
        width: '50%',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#7cbfcb',
    },
})