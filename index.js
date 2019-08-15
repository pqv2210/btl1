// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import Application from './Application';

export default class App extends Component{
    render(){
        return<Application />;
    }
}

AppRegistry.registerComponent('btl1', () => App);
