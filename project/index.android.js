/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

// load dependency
import DiaryList from './components/DiaryList.js';
import DiaryReader from './components/DiaryReader.js';
// import DiaryList from './components/DiaryWriter.js';

export default class diary extends Component {
    showDiaryList() {
        return (
            <DiaryList/>
        )
    }
    showDiaryReader() {
        return (
            <DiaryReader/>
        )
    }
    render() {
        // return this.showDiaryList();
        return this.showDiaryReader();
        // return this.showDiaryWriter();
    }
}

AppRegistry.registerComponent('diary', () => diary);
