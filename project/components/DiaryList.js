import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';

// some variables
let angryMood = require('./../image/angry.png');

// load dependency
import MVC from './public/MVC.js';

// create component
export default class DiaryList extends React.Component {
    updateSearchKeyword(newWord) {}

    render() {
        return (
            <View style={MVC.container}>
                <StatusBar backgroundColor="grey" animated={true}/>
                <View style={MVC.firstRow}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius:8
                    }}>
                        <TextInput autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="输入搜索关键字"
                            clearButtonMode="while-editing"
                            underlineColorAndroid="transparent"
                            onChangeText={this.updateSearchKeyword}
                            style={MVC.searchBarTextInput}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={MVC.smalltextStyle}>
                            <Text style={MVC.smallButton}>写日记</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={MVC.diaryAbstractList}>
                    <View style={MVC.secondRow}>
                        <Image source={angryMood} style={MVC.moodStyle}/>
                        <View style={MVC.subViewInReader}>
                            {/* <TouchableOpacity onPress={this.props.selectListItem}> */}
                            <TouchableOpacity>
                                <Text>某变量记录假日记列表标题</Text>
                            </TouchableOpacity>
                            <Text>某变量记录假日记列表时间</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
