// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import Login from './component/screen/Login'
import DrawerInfo from './component/screen/DrawerInfo'
import Chat from './component/screen/Chat'

const DrawerNavigation = createDrawerNavigator(
    {
        ChatScr: Chat,
        DrawerNav: DrawerInfo,
    },
    {
        contentComponent: DrawerInfo,
    })

const StackNavigation = createStackNavigator(
    {
        LoginScr: Login,
        ChatScr: {
            screen: DrawerNavigation,
            navigationOptions: {
                header: null,
                headerLeft: null,
            }},
    })

const Application = createAppContainer(StackNavigation)
export default Application