// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native'

class DisplayChat extends Component {
    render() {
        const {item} = this.props
        if (item.user.id === 1) {
            return (
                <View style={mstyles.flatlist}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={mstyles.avatar}
                    />
                    <View style={mstyles.shapes}>
                        <View style={mstyles.triangleCornerRight}/>
                        <View style={mstyles.talkBubbleSquare}>
                            <Text style={mstyles.textInFlatListRight}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        if (item.user.id === 2) {
            return (
                <View style={mstyles.flatlistback}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={mstyles.avatar}
                    />
                    <View style={mstyles.shapesback}>
                        <View style={mstyles.triangleCornerLeft}/>
                        <View style={mstyles.talkBubbleSquareBack}>
                            <Text style={mstyles.textInFlatListLeft}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        if (item.user.id === 3) {
            return (
                <View style={mstyles.flatlistback}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={mstyles.avatar}
                    />
                    <View style={mstyles.shapesback}>
                        <View style={mstyles.triangleCornerLeft}/>
                        <View style={mstyles.talkBubbleSquareBackLoading}>
                            <ActivityIndicator
                                size='small'
                                color='#9F2926'
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
}

export default DisplayChat

const mstyles = StyleSheet.create({
    shapes: {
        flexDirection: 'row-reverse',
    },
    shapesback: {
        flexDirection: 'row',
    },
    shape: {
        height: '105%',
        width: '105%',
    },
    flatlist: {
        flexDirection: 'row-reverse',
    },
    flatlistback: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        height: 40,
        width: '20%',
        marginLeft: 20,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    talkBubbleSquare: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#639f85',
        borderRadius: 10,
        maxWidth: 200,
    },
    talkBubbleSquareBack: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: -15,
        maxWidth: 260,
    },
    talkBubbleSquareBackLoading: {
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: -15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    triangleCornerRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 35,
        borderTopWidth: 35,
        borderRightColor: 'transparent',
        borderTopColor: '#619f69',
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
        borderTopColor: '#FFFFFF',
        transform: [
            {rotate: '90deg'},
        ],
    },
    textInFlatListRight: {
        fontSize: 18,
        margin: 10,
        color: '#FFFFFF',
    },
    textInFlatListLeft: {
        fontSize: 18,
        margin: 10,
    },
    icon: {
        height: 25,
        width: 25,
        margin: 3,
    },
})
