// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, FlatList} from 'react-native'
import data from '../data/data'
import GetData from '../data/getData';

class ListContact extends Component {
    static navigationOptions = {
        title: 'List Contact',
        headerLeft: null,
    }

    constructor(props) {
        super(props)
        this.state = {
            item: {},
            data: null,
        }
    }

    separator = () => {
        return (
            <View style={mstyles.separator}/>
        )
    }

    componentDidMount(): void {
        this.setState({data})
    }

    navigateToChat = (item) => {
        this.props.navigation.navigate('ChatScr', {item})
    }

    render() {
        console.log('data', this.state.data)
        return (
            <ScrollView>
                <View style={mstyles.container}>
                    <FlatList
                        style={{flex: 1}}
                        data={this.state.data}
                        renderItem={({item}) =>
                            (<GetData
                                item={item}
                                getDataToList={this.navigateToChat}
                            />)
                        }
                        keyExtractor={(item) => item.username}
                        ItemSeparatorComponent={this.separator}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default ListContact

const mstyles = StyleSheet.create({
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
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#22182c',
        marginTop: 4,
    },
})