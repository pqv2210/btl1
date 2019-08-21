// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

class DisplayChat extends Component {
    render() {
        const {item} = this.props

        // id user  1 => icon va text o ben phai
        if (item.user.id === 1) {
            return (
                <View style={mstyles.flatlist}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={mstyles.avatar}
                    />
                    <View style={mstyles.shapes}>
                        <View style={mstyles.talkBubbleSquare}>
                            <Text style={mstyles.textInFlatListRight}>{item.text}</Text>
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
                            <Text style={mstyles.textInFlatListLeft}>{item.text}</Text>
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
        borderRadius: 999,
        height: 50,
        width: 50,
    },
    talkBubbleSquare: {
        width: 200,
        height: 50,
        backgroundColor: '#529f88',
        borderRadius: 10,
    },
    talkBubbleSquareBack: {
        width: 200,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: -15,
        shadowOffset: {
            width: 10,
            height: 10},
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    triangleCornerRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 35,
        borderTopWidth: 35,
        borderRightColor: 'transparent',
        borderTopColor: '#529f88',
        marginLeft: -15,
        shadowOffset: {
            width: 10,
            height: 10},
        shadowColor: 'black',
        shadowOpacity: 1.0,
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
        shadowOffset: {
            width: 10,
            height: 10},
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    textInFlatListRight: {
        fontSize: 18,
        margin: 10,
        color: '#FFFFFF'
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
