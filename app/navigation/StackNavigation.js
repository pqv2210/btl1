// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStackNavigator} from 'react-navigation'
import Login from '../screen/Login'
import DrawerNavigation from './DrawerNavigation'
import PopUp from '../component/PopUp'

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