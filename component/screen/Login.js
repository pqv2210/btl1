// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground} from 'react-native'

class Login extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-open',
    };

    constructor(props) {
        super(props)
        this.state = {
            textEmail: 'Email',
            textPass: 'Password',
        }
    }

    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={require('/home/vu/ReactNative/btl1/image/Login.png')}
                    style={{width: '100%', height: '100%'}}
                >
                    <View style={styles.container}>
                        <View style={styles.box}>
                            <Image
                                style={styles.icon}
                                source={require('/home/vu/ReactNative/btl1/image/Mail.png')}
                            />
                            <TextInput
                                style={styles.textinput}
                                onChangeText={(textEmail) => this.setState({textEmail})}
                                value={this.state.textEmail}
                            />
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.box}>
                            <Image
                                style={styles.icon}
                                source={require('/home/vu/ReactNative/btl1/image/Key.png')}
                            />
                            <TextInput
                                style={styles.textinput}
                                onChangeText={(textPass) => this.setState({textPass})}
                                value={this.state.textPass}
                            />
                        </View>
                        <View style={styles.separator}/>
                        <TouchableOpacity
                            style={styles.touch}
                            title='Login'
                            onPress={() => this.props.navigation.navigate('ListContactScr')}
                        >
                            <Text style={styles.touchtext}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginTop: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        height: 40,
        width: '70%',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20,
    },
    text: {
        fontSize: 18,
        marginTop: 2,
    },
    separator: {
        height: 10,
        width: '100%',
    },
    textinput: {
        height: 40,
        fontSize: 18,
        width: '100%',
    },
    touch: {
        height: 40,
        width: '70%',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#b50591',
        alignItems: 'center',
    },
    touchtext: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 3,
    },
    icon: {
        marginLeft: 10,
        marginTop: 10,
        height: 16,
        width: 19,
    },
})