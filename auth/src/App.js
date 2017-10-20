import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase';
import {Header, Button, Spinner,Card,CardSection} from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAvM2Y02KoW99vK_I8HPonjsxShqkQzSSI',
            authDomain: 'authentication-eca4c.firebaseapp.com',
            databaseURL: 'https://authentication-eca4c.firebaseio.com',
            projectId: 'authentication-eca4c',
            storageBucket: 'authentication-eca4c.appspot.com',
            messagingSenderId: '1021527595032'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        });

    }


    renderContent() {


        switch (this.state.loggedIn) {
            case true:
                return <Card><CardSection><Button onPress={()=> firebase.auth().signOut()}>Log out</Button></CardSection></Card>
            case false:
                return <LoginForm/>;
            default:
                return <Spinner/>
        }


    }

    render() {

        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App