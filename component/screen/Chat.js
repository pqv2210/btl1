// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements'

class Chat extends Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            item: {},
            textmsg: 'Text Msg',
        }
    }

    separator = () => {
        return (
            <View style={mstyles.separator}/>
        )
    }

    componentDidMount() {
        const item = this.props.navigation.getParam('item', 'NO-ID')
        this.setState({
            messages: [
                {
                    id: 1,
                    text: 'Hello Bravo!',
                    createdAt: new Date(),
                    user: {
                        id: 1,
                        name: 'Alpha',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    id: 2,
                    text: 'Hello Alpha!',
                    createdAt: new Date(),
                    user: {
                        id: 2,
                        name: 'Bravo',
                        avatar: 'https://lh3.googleusercontent.com/7M7NquJct0L_jW6kzydcYCAaSGK0C9UEpCdFldLiGizTXPkkn77Pj8BXbNH2h1ZvWGJ8=s85',
                    },
                },
                {
                    id: 3,
                    text: 'Where is Charlie,boi?',
                    createdAt: new Date(),
                    user: {
                        id: 1,
                        name: 'Alpha',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },

            ],
        })
        this.setState({item})
    }

    render() {
        return (
            <View style={mstyles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: '#ff90a2',
                        justifyContent: 'space-around',
                    }}
                >
                    <TouchableOpacity
                        style={mstyles.icon}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            source={require('/home/vu/ReactNative/btl1/image/GoBack.png')}
                            style={mstyles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={mstyles.headertext}>{this.state.item.fullname}</Text>
                </Header>
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
                <View style={mstyles.box}>
                    <TouchableOpacity style={mstyles.icon}>
                        <Image
                            style={mstyles.icon}
                            source={require('/home/vu/ReactNative/btl1/image/Plus.png')}
                        />
                    </TouchableOpacity>
                    <Text>  </Text>
                    <TouchableOpacity style={mstyles.icon}>
                        <Image
                            style={mstyles.icon}
                            source={require('/home/vu/ReactNative/btl1/image/Smile.png')}
                        />
                    </TouchableOpacity>
                    <Text>    </Text>
                    <TextInput
                        style={mstyles.textinput}
                        onChangeText={(textmsg) => this.setState({textmsg})}
                        value={this.state.textmsg}
                    />
                    <Text>  </Text>
                    <View style={mstyles.button}>
                        <TouchableOpacity style={mstyles.shape}>
                            <Image
                                style={mstyles.touchsend}
                                source={require('/home/vu/ReactNative/btl1/image/Bottom.png')}
                            />
                        </TouchableOpacity>
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
        backgroundColor: '#ffffff',
    },
    headertext: {
        fontSize: 20,
        color: '#ffffff',
    },
    separator: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginTop: 5,
        height: 0.5,
    },
    scrollview: {
        height: '78%',
        marginTop: 10,
    },
    box: {
        flexDirection: 'row',
        marginTop: 4,
    },
    textinput: {
        height: 40,
        width: '54%',
        fontSize: 16,
        borderRadius: 999,
        borderWidth: 1,
    },
    touchsend: {
        height: '105%',
        width: '105%',
    },
    shapes: {
        flexDirection: 'row',
    },
    icon: {
        height: 25,
        width: 25,
        marginTop: 4,
        marginLeft: 5,
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
})