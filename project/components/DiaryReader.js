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
                <StatusBar backgroundColor="#437DA2" animated={true}/>
                <View style={MVC.firstRow}>
                    <TouchableOpacity>
                        <Text style={MVC.middleButton}>返回</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MVC.middleButton}>上一篇</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MVC.middleButton}>下一篇</Text>
                    </TouchableOpacity>
                </View>
                <View style={[MVC.secondRow, {backgroundColor:"#437DA2",padding:5}]}>
                    <Image source={angryMood} style={MVC.moodStyle}/>
                    <View style={MVC.subViewInReader}>
                        <Text style={MVC.textInReader}>
                            日记标题：某变量
                        </Text>
                        <Text style={MVC.textInReader}>
                            时间：某变量
                        </Text>
                    </View>
                </View>
                <TextInput style={[MVC.diaryBodyStyle,{color:'black',backgroundColor:'#fff'}]} multiline={true} editable={false} value={'某变量记录日记正文'}/>
            </View>
        );
    }
}
