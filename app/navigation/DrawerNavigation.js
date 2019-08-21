// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createDrawerNavigator} from 'react-navigation'
import Chat from '../screen/Chat'
import DrawerInfo from '../component/DrawerInfo'

const DrawerNavigation = createDrawerNavigator(
    {
        ChatScr: Chat,
        DrawerNav: DrawerInfo,
    },
    {
        contentComponent: DrawerInfo,
    })

export default DrawerNavigation