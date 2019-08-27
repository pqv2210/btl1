// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

class PopUp extends React.Component {
    hidePopUp = () => {
        this.props.hidePopUp()
    }

    render() {
        if (this.props.isStatus === true) {
            return (
                <View style={mstyles.view}>
                    <View style={mstyles.container}>
                        <Image
                            source={{uri: 'https://placeimg.com/140/140/any'}}
                            style={mstyles.image}
                        />
                        <Text style={mstyles.welcome}>Welcome</Text>
                        <TouchableOpacity
                            style={mstyles.touchLetsGo}
                        >
                            <Text style={mstyles.letsgo}>Let's Go</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={mstyles.touchSkip}
                            onPress={this.hidePopUp}
                        >
                            <Text style={mstyles.skip}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return null
    }
}

export default PopUp

const mstyles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 320,
        width: '78%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 999,
    },
    welcome: {
        fontSize: 23,
        fontWeight: 'bold',
        margin: 10,
    },
    touchLetsGo: {
        height: 50,
        width: '75%',
        backgroundColor: '#ffa1f3',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 5,
    },
    touchSkip: {
        height: 50,
        width: '75%',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letsgo: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    skip: {
        fontSize: 20,
        color: '#FFA1F3',
    },
})