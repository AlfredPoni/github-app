import {StyleSheet, Dimensions} from 'react-native';

// some variables
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
let textSize = totalWidth / 18;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;

// StyleSheets
let MVC = StyleSheet.create({
    container: {
        top: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        borderColor: 'black'
    },
    firstRow: {
        height: textSize *2 + 2,
        flexDirection: 'row',
        width: totalWidth - 4,
        justifyContent: 'space-around',
        margin: 2,
        backgroundColor:'#fff'
    },
    longButton: {
        height: textSize *1.4,
        backgroundColor: '#FF8A00',
        width: textSize*10,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: textSize,
        color:'white'
    },
    middleButton: {
        height: textSize*1.4,
        backgroundColor: '#FF8A00',
        width: textSize*5,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: textSize,
        color:'white',
        margin:1
    },
    diaryAbstractList: {
        flex: 1,
        margin: 4,
        marginTop:0,
        width: totalWidth - 4,
        justifyContent: 'center',
        backgroundColor: '#437DA2',
        alignItems:'center'
    },
    diaryBodyStyle: {
        flex: 1,
        width: totalWidth - 8,
        fontSize: textSize,
        backgroundColor: 'grey',
        margin: 4
    },
    smallButton: {
        fontSize: textSize-4,
        color:'white',
    },
    moodStyle: {
        height: textSize*3.2,
        width: textSize*3.2,
        borderRadius: textSize*1.6
    },
    subViewInReader: {
        width: totalWidth - 5 - textSize*3.2
    },
    textInReader: {
        height: textSize*1.4,
        fontSize: textSize,
        backgroundColor: '#437DA2',
        margin: 2,
        color:'#fff',
        paddingLeft:20
    },
    secondRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:5,
        backgroundColor:'white',
        width:totalWidth - 20,
        margin:5
    },
    titleInputStyle: {
        fontSize: textSize,
        backgroundColor: 'grey',
        height: textSize*2.4,
        color: 'black',
        margin: 4,
        borderWidth: 2,
        width: totalWidth - 12,
        borderColor: 'black'
    },
    searchBarTextInput: {
        backgroundColor: 'white',
        borderColor: 'black',
        height: textSize*2,
        width: textSize*10,
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 14,
        borderRadius:8
    },
    smalltextStyle:{
        justifyContent:'center',
        alignItems:'center',
        height: (textSize-4)*2,
        backgroundColor: '#FF8A00',
        width: textSize*3,
        borderRadius: 8,
        margin:4
    }
})

export {MVC as default};
