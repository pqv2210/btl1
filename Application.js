// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import StackNavigation from './app/navigation/StackNavigation'

const Application = createAppContainer(StackNavigation)

export default Application