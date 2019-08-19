// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation'
import Login from './component/screen/Login'
import ListContact from './component/screen/ListContact'
import DrawerInfo from './component/screen/DrawerInfo'
import Chat from './component/screen/Chat'

const DrawerNavigation = createDrawerNavigator(
    {
        ListContact,
        DrawerNav: DrawerInfo,
        ChatScr: Chat,
    },
    {
        contentComponent: DrawerInfo,
    })

const StackNavigation = createStackNavigator(
    {
        LoginScr: Login,
        ListContactScr: {
            screen: DrawerNavigation,
            navigationOptions: {
                header: null,
                headerLeft: null,
            }},
    })

const Application = createAppContainer(StackNavigation)
export default Application