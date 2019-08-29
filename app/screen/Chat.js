// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, ImageBackground, Keyboard} from 'react-native'
import DisplayChat from '../component/DisplayChat'

class Chat extends Component {
    static navigationOptions = {header: null}

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            text: '',
        }
    }

    separator = () => {
        return (
            <View style={mstyles.separator}/>
        )
    }

    getValueFromTextInput = (text) => this.setState({text})

    touchSend = () => {
        if (this.state.text !== '') {
            const item = [
                {
                    text: this.state.text,
                    user: {
                        id: 1,
                        avatar: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
                    },
                },
                {
                    text: '',
                    user: {
                        id: 3,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWa039kQciNVVQ-AXImAVEcZce1Kib7TalX-x5irmDuj0RF7lXlA',
                    },
                },
            ]
            const arr = this.state.messages.concat(item)
            this.setState({
                messages: arr,
            })
            Keyboard.dismiss()
            this.fetchData().done()
        }
    }

    async fetchData() {
        const response = await fetch(`http://ghuntur.com/simsim.php?lc=en&deviceId=&bad0=&txt=${this.state.text}`)
        const textres = await response.text()
        const text = textres.replace(/\s\s+/g, ' ').trim()
        this.setState({
            text,
        })
        const item = {
            text: this.state.text,
            user: {
                id: 2,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWa039kQciNVVQ-AXImAVEcZce1Kib7TalX-x5irmDuj0RF7lXlA',
            },
        }
        this.state.messages.splice(-1, 1)
        const arr = this.state.messages.concat(item)
        this.setState({messages: arr})
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={mstyles.container}>
                <View>
                    <View>
                        <ImageBackground
                            source={require('/home/vu/ReactNative/btl1/app/image/Title.png')}
                            style={mstyles.imgbg}
                        >
                            <View style={mstyles.headerbox}>
                                <TouchableOpacity style={mstyles.iconbox}>
                                    <Image
                                        source={require('/home/vu/ReactNative/btl1/app/image/GoBack.png')}
                                        style={mstyles.icon}
                                    />
                                </TouchableOpacity>
                                <Text style={mstyles.titletext}>SimSim</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <ScrollView style={mstyles.scrollview}>
                        <FlatList
                            data={this.state.messages}
                            renderItem={({item}) => (
                                <DisplayChat
                                    item={item}
                                />
                            )}
                            ItemSeparatorComponent={this.separator}
                        />
                    </ScrollView>
                    <View style={mstyles.box}>
                        <TouchableOpacity style={mstyles.iconbox}>
                            <Image
                                style={mstyles.icon}
                                source={require('/home/vu/ReactNative/btl1/app/image/Plus.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={mstyles.iconbox}>
                            <Image
                                style={mstyles.icon}
                                source={require('/home/vu/ReactNative/btl1/app/image/Smile.png')}
                            />
                        </TouchableOpacity>
                        <TextInput
                            style={mstyles.textinput}
                            multiline={true}
                            numberOfLine={10}
                            placeholder='Text Massage'
                            onChangeText={this.getValueFromTextInput}
                            value={this.state.text}
                        />
                        <Image
                            style={mstyles.shape}
                            source={require('/home/vu/ReactNative/btl1/app/image/Shape.png')}
                        />
                        <View style={mstyles.button}>
                            <TouchableOpacity
                                style={mstyles.iconbox}
                                onPress={this.touchSend}
                            >
                                <Image
                                    style={mstyles.icon}
                                    source={require('/home/vu/ReactNative/btl1/app/image/Send.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Chat

const mstyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#f3f3f3',
    },
    imgbg: {
        height: 55,
        width: '100%',
    },
    titletext: {
        fontSize: 23,
        color: '#ffffff',
        marginLeft: 10,
    },
    separator: {
        width: '100%',
        backgroundColor: '#f3f3f3',
        marginTop: 5,
        height: 0.5,
    },
    scrollview: {
        height: '81%',
        marginTop: 3,
        marginBottom: 3,
    },
    headerbox: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 0,
    },
    textinput: {
        height: 40,
        width: '50%',
        fontSize: 16,
        borderRadius: 999,
        marginLeft: 3,
    },
    touchsend: {
        height: '105%',
        width: '105%',
    },
    shapes: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        height: 40,
        width: '20%',
        marginLeft: -80,
    },
    icon: {
        height: 25,
        width: 25,
        margin: 3,
    },
    iconbox: {
        height: 30,
        width: 30,
        margin: 5,
    },
    bottom: {
        flexDirection: 'row',
    },
    shape: {
        height: 58,
        width: 120,
        marginTop: 4,
    },
})