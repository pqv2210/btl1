// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

class ListContact extends Component {
    static navigationOptions = {title: 'List Contact'}

    render() {
        return (
            <ScrollView>
                <View style={mstyles.container}>
                    <View style={mstyles.item}>
                        <View style={mstyles.itemtext}>
                            <Text>name</Text>
                            <Text>username</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ListContact

const mstyles=StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    item: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    itemimage: {
        height: 30,
        width: 30,
    },
    itemtext: {
        fontSize: 20,
    },
});