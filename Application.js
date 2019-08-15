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

const StackNavigation = createStackNavigator({
    ListContactScr: ListContact,
    ChatScr: Chat,
    DrawerNav: DrawerInfo,
})

const DrawerNavigation = createDrawerNavigator({
    DrawerNav: StackNavigation,
})

const SwitchNavigation = createSwitchNavigator({
    LoginScr: Login,
    DrawerNav: DrawerNavigation,
})

const Application = createAppContainer(SwitchNavigation)
export default Application