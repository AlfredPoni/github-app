import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ListView,
    RefreshControl
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import NavigationBar from './NavigationBar.js';
import Toast, {DURATION} from "react-native-easy-toast"

var data = {
    "result": [
        {
            "email": "s.haerasd@asd.com",
            'fullName': "张三"
        }, {
            "email": "asd.haerasd@asdasd.com",
            'fullName': "张三阿斯顿"
        }, {
            "email": "aafas.haasderasd@asd.com",
            'fullName': "啊删掉"
        }, {
            "email": "svzx.haerasd@asd.com",
            'fullName': "张阿斯顿三"
        }, {
            "email": "azxcvs.ahwdqawaerasd@asd.com",
            'fullName': "张阿斯顿三"
        }, {
            "email": "azxvs.zxcad@asd.com",
            'fullName': "张鼎沸的三"
        }, {
            "email": "asqre.haasdqwersd@asd.com",
            'fullName': "张温柔三"
        }, {
            "email": "ghjvb.n@asd.com",
            'fullName': "张撒热情三"
        }, {
            "email": "awn.cvbdee@dfg.com",
            'fullName': "张是否更换三"
        }, {
            "email": "snxcvb.dfcs@asd.com",
            'fullName': "张三两句话"
        }, {
            "email": "bxns.xvnxcxcv@asd.com",
            'fullName': "zhangasn"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }, {
            "email": "serqs.haerazxrwqsd@asd.com",
            'fullName': "张三欧阳靖"
        }
    ],
    "statusCode": 0
}
export default class ListViewTest extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            selectedTab: 'tb_popular',
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true
        }
        this.onLoad();
    }

    renderRow(item) {
        return <View style={styles.row}>
            <TouchableOpacity onPress={() => {
                this.toast.show('你单击了：' + item.fullName, DURATION.LENGTH_LONG)
            }}>
                <Text style={styles.tips}>{item.fullName}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View style={styles.line} key={rowID}></View>
    }
    renderFooter() {
        return <Image source={require('./res/images/ic_computer@2x.png')}/>
    }
    onLoad() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="List View"/>
                <ListView dataSource={this.state.dataSource} renderRow={(item) => this.renderRow(item)} renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator()} refreshControl={< RefreshControl refreshing = {
                    this.state.isLoading
                }
                onRefresh = {
                    () => this.onLoad()
                } />} renderFooter={() => this.renderFooter()}/>
                <Toast ref={toast => {
                    this.toast = toast
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tips: {
        fontSize: 20
    },
    row: {
        height: 50
    },
    line: {
        height: 1,
        backgroundColor: '#000'
    }
})
