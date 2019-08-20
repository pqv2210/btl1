// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, ImageBackground} from 'react-native'

class Chat extends Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
        }
    }

    separator = () => {
        return (
            <View style={mstyles.separator}/>
        )
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    id: 1,
                    text: 'Hello Bravo!',
                    createdAt: '9:00 PM',
                    user: {
                        id: 1,
                        name: 'Alpha',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    id: 2,
                    text: 'Hello Alpha!',
                    createdAt: '9:03 PM',
                    user: {
                        id: 2,
                        name: 'Bravo',
                        avatar: 'https://lh3.googleusercontent.com/7M7NquJct0L_jW6kzydcYCAaSGK0C9UEpCdFldLiGizTXPkkn77Pj8BXbNH2h1ZvWGJ8=s85',
                    },
                },
                {
                    id: 3,
                    text: 'Where is Charlie,boi?',
                    createdAt: '9:05 PM',
                    user: {
                        id: 1,
                        name: 'Alpha',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },

            ],
        })
    }

    render() {
        return (
            <View style={mstyles.container}>
                <View>
                    <ImageBackground
                        source={require('/home/vu/ReactNative/btl1/image/Title.png')}
                        style={mstyles.imgbg}
                    >
                        <View style={mstyles.box}>
                            <TouchableOpacity style={mstyles.iconbox}>
                                <Image
                                    source={require('/home/vu/ReactNative/btl1/image/GoBack.png')}
                                    style={mstyles.icon}
                                />
                            </TouchableOpacity>
                            <Text style={mstyles.titletext}>Alpha</Text>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView style={mstyles.scrollview}>
                    <FlatList
                        data={this.state.messages}
                        renderItem={({item}) => {
                            // id user = 1 => icon va text o ben phai
                            if (item.user.id === 1) {
                                return (
                                    <View style={mstyles.flatlist}>
                                        <Image
                                            source={{uri: item.user.avatar}}
                                            style={mstyles.avatar}
                                        />
                                        <View style={mstyles.shapes}>
                                            <View style={mstyles.talkBubbleSquare}>
                                                <Text style={mstyles.textInFlatList}>{item.text}</Text>
                                            </View>
                                            <View style={mstyles.triangleCornerRight}/>
                                        </View>
                                    </View>
                                )
                            }

                            // id user # 1 => icon va text o ben trai
                            if (item.user.id !== 1) {
                                return (
                                    <View style={mstyles.flatlistback}>
                                        <Image
                                            source={{uri: item.user.avatar}}
                                            style={mstyles.avatar}
                                        />
                                        <View style={mstyles.shapes}>
                                            <View style={mstyles.triangleCornerLeft}/>
                                            <View style={mstyles.talkBubbleSquareBack}>
                                                <Text style={mstyles.textInFlatList}>{item.text}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                        ItemSeparatorComponent={this.separator}
                    />
                </ScrollView>
                <View>
                    <ImageBackground
                        source={require('/home/vu/ReactNative/btl1/image/Bottom.png')}
                        style={mstyles.imgbottom}
                    >
                        <View style={mstyles.box}>
                            <TouchableOpacity style={mstyles.iconbox}>
                                <Image
                                    style={mstyles.icon}
                                    source={require('/home/vu/ReactNative/btl1/image/Plus.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={mstyles.iconbox}>
                                <Image
                                    style={mstyles.icon}
                                    source={require('/home/vu/ReactNative/btl1/image/Smile.png')}
                                />
                            </TouchableOpacity>
                            <TextInput
                                style={mstyles.textinput}
                                placeholder='Text Massage'
                            />
                            <View style={mstyles.button}>
                                <TouchableOpacity style={mstyles.iconbox}>
                                    <Image
                                        style={mstyles.icon}
                                        source={require('/home/vu/ReactNative/btl1/image/Send.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default Chat

const mstyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
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
        backgroundColor: '#ffffff',
        marginTop: 5,
        height: 0.5,
    },
    scrollview: {
        height: '79%',
        marginTop: 10,
    },
    box: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginTop: 5,
    },
    textinput: {
        height: 40,
        width: '55%',
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
    shape: {
        height: '105%',
        width: '105%',
    },
    flatlistback: {
        flexDirection: 'row',
    },
    flatlist: {
        flexDirection: 'row-reverse',
    },
    button: {
        flexDirection: 'row',
        height: 40,
        width: '20%',
        marginLeft: 20,
    },
    avatar: {
        borderRadius: 999,
        height: 50,
        width: 50,
    },
    talkBubbleSquare: {
        width: 200,
        height: 50,
        backgroundColor: '#CBEED4',
        borderRadius: 10,
    },
    talkBubbleSquareBack: {
        width: 200,
        height: 50,
        backgroundColor: '#CBEED4',
        borderRadius: 10,
        marginLeft: -15,
    },
    triangleCornerRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 35,
        borderTopWidth: 35,
        borderRightColor: 'transparent',
        borderTopColor: '#CBEED4',
        marginLeft: -15,
    },
    triangleCornerLeft: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 35,
        borderTopWidth: 35,
        borderRightColor: 'transparent',
        borderTopColor: '#cbeed4',
        transform: [
            {rotate: '90deg'},
        ],
    },
    textInFlatList: {
        fontSize: 18,
        margin: 10,
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
    imgbottom: {
        height: 70,
        width: 380,
    },
})