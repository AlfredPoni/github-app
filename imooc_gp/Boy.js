import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Girl from './Girl.js';
import {
    Navigator,
}from 'react-native-deprecated-custom-components';
import NavigationBar from './NavigationBar.js';

export default class Boy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.statusBar]}>
                <NavigationBar title="Boy" statusBar={{
                    backgroundColor:'#abcdef',
                }}/>
                <Text style={styles.text}>I am a Boy.</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.navigator.push({
                        component: Girl,
                        params: {
                            word: '一只玫瑰',
                            onCallBack: (word) => {
                                this.setState({word: word})
                            }
                        }
                    })
                }}>送女孩一只玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 20
    }
})
