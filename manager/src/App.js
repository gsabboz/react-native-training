import React, {Component} from 'React'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {View, Text} from 'react-native'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import Router from './Router'
class App extends Component {

    componentWillMount() {

        const config = {
            apiKey: "AIzaSyAp7pFTjW6vltdGhwi13h1YGtzuGYpm1W8",
            authDomain: "manager-af319.firebaseapp.com",
            databaseURL: "https://manager-af319.firebaseio.com",
            projectId: "manager-af319",
            storageBucket: "",
            messagingSenderId: "99777012820"
        };
        firebase.initializeApp(config);

    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }

}


export default App;