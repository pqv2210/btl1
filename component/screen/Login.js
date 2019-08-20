// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'

class Login extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-open',
    };

    render() {
        return (
            <ImageBackground
                source={require('/home/vu/ReactNative/btl1/image/axigola.png')}
                style={styles.imgbg}
            >
                <View style={styles.container}>
                    <Text style={styles.textchat}>Chat Demo</Text>
                    <View style={styles.separator2}/>
                    <View style={styles.box}>
                        <Image
                            resizeMode='cover'
                            style={styles.icon}
                            source={require('/home/vu/ReactNative/btl1/image/Mail.png')}
                        />
                        <TextInput
                            style={styles.textinput}
                            placeholder='Email'
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
                            placeholder='Password'
                        />
                    </View>
                    <View style={styles.separator}/>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => this.props.navigation.navigate('ChatScr')}
                    >
                        <Text style={styles.touchtext}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textforgot}>FORGOT PASSWORD?</Text>
                    </TouchableOpacity>
                    <View style={styles.separator1}/>
                    <View style={styles.bottom}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.textsignup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    imgbg: {
        height: '107%', //107
        width: '107%',
        marginTop: -70,
        marginLeft: -18,
    },
    container: {
        marginTop: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textchat: {
        fontSize: 45,
        color: '#FFFFFF',
        marginTop: -150,
    },
    box: {
        flexDirection: 'row',
        height: 50,
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
        height: 20,
        width: '100%',
    },
    separator1: {
        height: 80,
        width: '100%',
    },
    separator2: {
        height: 140,
        width: '100%',
    },
    textinput: {
        height: 50,
        fontSize: 18,
        width: '80%',
    },
    touch: {
        height: 50,
        width: '70%',
        borderRadius: 30,
        backgroundColor: '#b549ac',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchtext: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    icon: {
        marginLeft: 10,
        marginTop: 15,
        height: 16,
        width: 19,
    },
    textforgot: {
        fontSize: 13,
        color: '#b549ac',
        marginTop: 10,
    },
    bottom: {
        flexDirection: 'row',
        marginBottom: 1,
    },
    textsignup: {
        fontSize: 13,
        color: '#3289b5',
    },
})