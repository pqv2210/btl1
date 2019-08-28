// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, AsyncStorage} from 'react-native'

class Login extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-open',
    };

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            status: true,
        }
    }

    getValueUsername = (text) => this.setState({username: text})

    getValuePassword = (text) => this.setState({password: text})

    rememberUser = () => {
        AsyncStorage.setItem('username', this.state.username)
        AsyncStorage.setItem('password', this.state.password)
    }

    getremembedUser = async () => {
        const username = await AsyncStorage.getItem('username')
        const password = await AsyncStorage.getItem('password')
        await this.setState({username, password})
    };

    navigateToChatScr = () => {
        this.rememberUser()
        this.props.navigation.navigate('ChatScr')
    }

    componentDidMount() {
        this.getremembedUser()
    }

    render() {
        return (
            <ScrollView style={styles.scrollview}>
                <View>
                    <View style={styles.header}>
                        <Image
                            source={require('/home/vu/ReactNative/btl1/app/image/loginui.png')}
                            style={styles.imgbg}
                        />
                        <Text style={styles.textchat}>Chat Bot</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.separator2}/>
                        <View style={styles.box}>
                            <Image
                                resizeMode='cover'
                                style={styles.iconemail}
                                source={require('/home/vu/ReactNative/btl1/app/image/Mail.png')}
                            />
                            <TextInput
                                style={styles.textinput}
                                placeholder='Email'
                                onChangeText={this.getValueUsername}
                                value={this.state.username}
                            />
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.box}>
                            <Image
                                style={styles.iconkey}
                                source={require('/home/vu/ReactNative/btl1/app/image/Key.png')}
                            />
                            <TextInput
                                style={styles.textinput}
                                secureTextEntry={true}
                                placeholder='Password'
                                onChangeText={this.getValuePassword}
                                value={this.state.password}
                            />
                        </View>
                        <View style={styles.separator}/>
                        <TouchableOpacity
                            style={styles.touch}
                            onPress={this.navigateToChatScr}
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
                </View>
            </ScrollView>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
    },
    imgbg: {
        height: 300,
        width: 400,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
    },
    textchat: {
        fontSize: 45,
        color: '#FFFFFF',
        marginTop: -200,
    },
    box: {
        flexDirection: 'row',
        height: 50,
        width: '70%',
        borderWidth: 0.5,
        borderRadius: 30,
        fontSize: 20,
        alignItems: 'center',
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
        height: 90,
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
    iconemail: {
        marginLeft: 10,
        height: 16,
        width: 20,
    },
    iconkey: {
        marginLeft: 10,
        height: 19,
        width: 19,
    },
    textforgot: {
        fontSize: 13,
        color: '#b549ac',
        marginTop: 15,
    },
    bottom: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    textsignup: {
        fontSize: 13,
        color: '#3289b5',
    },
})