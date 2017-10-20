// Index.ios.js place code for ios

import React from 'react'
import {Text, AppRegistry, View} from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => {
    return (
        //flex 1 is added so the scroll view does not bounce back
        <View style={{flex: 1}} >
            <Header headerText={'The sound of Katia!!'}/>
            <AlbumList/>
        </View>
    )
};


AppRegistry.registerComponent('albums', () => App);

