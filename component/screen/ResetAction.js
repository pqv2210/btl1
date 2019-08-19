// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {NavigationActions} from "react-navigation";

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LoginScr' })],
});
this.props.navigation.dispatch(resetAction);