import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, Card, CardSection} from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC7esoDlCbH8BPryQO_wowIEhfvSUuFsL0',
            authDomain: 'learnrnfirebase.firebaseapp.com',
            databaseURL: 'https://learnrnfirebase.firebaseio.com',
            projectId: 'learnrnfirebase',
            storageBucket: 'learnrnfirebase.appspot.com',
            messagingSenderId: '888586472979'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card style={styles.centerScreen}>
                        <CardSection>
                            <Button
                                onPress={() => firebase.auth().signOut()}>
                                Log out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <View style={styles.centerScreen}>
                        <Spinner style={styles.centerScreen} size="large"/>
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    centerScreen: {
        marginTop: 20
    }
}

export default App;