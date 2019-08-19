// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

class GetData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {},
        }
    }

    getDataToList = () => {
        this.props.getDataToList(this.props.item)
    }

    render() {
        return (
            <TouchableOpacity
                style={mstyles.container}
                onPress={this.getDataToList}
            >
                <Image
                    source={{uri: this.props.item.avatarURL}}
                    style={mstyles.avatar}
                />
                <TouchableOpacity style={mstyles.text}>
                    <Text>{this.props.item.fullname}</Text>
                    <Text>{this.props.item.username}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

export default GetData

const mstyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        zIndex: 0,
    },

    avatar: {
        height: 60,
        width: 60,
        margin: 10,
        borderRadius: 999,
    },

    text: {
        fontSize: 30,
        color: '#382BF1',
        marginLeft: 7,
        alignContent: 'center',
    },
})