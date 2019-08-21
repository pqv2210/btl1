// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {NavigationActions, StackActions} from 'react-navigation'

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'LoginScr'})],
})

class DrawerInfo extends Component {
   navigateAction = () => {
       this.props.navigation.dispatch(resetAction)
   }

   render() {
       return (
           <View style={mstyles.container}>
               <View style={mstyles.containersm}>
                   <Image
                       source={{uri: 'data:image/jpeg;base64,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'}}
                       style={mstyles.image}
                   />
                   <View style={mstyles.box}>
                       <Text style={mstyles.text}>Meow</Text>
                       <Text style={mstyles.text}>meow@gmail.com</Text>
                   </View>
               </View>
               <View>
                   <TouchableOpacity style={mstyles.touch}>
                       <Text style={mstyles.text}>Chat</Text>
                   </TouchableOpacity>
                   <View style={mstyles.separator}/>
                   <TouchableOpacity style={mstyles.touch}>
                       <Text style={mstyles.text}>Group Chat</Text>
                   </TouchableOpacity>
                   <View style={mstyles.separator}/>
                   <TouchableOpacity
                       onPress={this.navigateAction}
                       style={mstyles.touch}
                   >
                       <Text style={mstyles.text}>Log Out</Text>
                   </TouchableOpacity>
               </View>
           </View>
       )
   }
}

export default DrawerInfo

const mstyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    containersm: {
        backgroundColor: '#acf7ea',
        flexDirection: 'row',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 999,
        marginLeft: 10,
    },
    text: {
        fontSize: 15,
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    touch: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3EAF1',
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#000000',
    },
})