import {createDrawerNavigator} from "react-navigation"
import Chat from "../Chat"
import DrawerInfo from "../DrawerInfo"

const DrawerNavigation = createDrawerNavigator(
    {
        ChatScr: Chat,
        DrawerNav: DrawerInfo,
    },
    {
        contentComponent: DrawerInfo,
    })

export default DrawerNavigation