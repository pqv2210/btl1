// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStackNavigator} from 'react-navigation'
import Login from '../Login'
import DrawerNavigation from "./DrawerNavigation";

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

export default StackNavigation