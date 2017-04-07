# react-native-firebase-learn-ezpz

## Add Firebase into your project
```
npm install --save firebase
```

## Make your own form

Make your own form, in my case i use Input for Email and Password, Button for Login and Logout button, Spinner for loading, and Text for error status

## Make project in Firebase

Make sure you make a project in Firebase, go to [firebase.google.com](firebase.google.com) click go to console in top right corner of the page, Add a project, give it name whatever you want. After that click the button say "Add Firebase to your webapp" and you will find code something like this
```
            apiKey: 'AIzaSyC7esoxxxxxxxxxx',
            authDomain: 'learnrnfxxxx.firebaseapp.com',
            databaseURL: 'https://leaxxxxbase.firebaseio.com',
            projectId: 'learnrnfirxxx',
            storageBucket: 'learnrnfixxx.appspot.com',
            messagingSenderId: 'xxxxxxxxx'
```
Copy them all and save it in notepad or something you like.

## Setting in your project
First, import firebase from library that we download before.
```
import firebase from 'firebase';
```
in the top of class make state for status we logged in yet or not
```
state = {loggedIn: null};
```
and then, make a lifecycle method componentWillMount() for setup firebase into your project. This method is running before we render our project.
```
componentWillMount() {
        firebase.initializeApp({
            apiKey: 'yourkey',
            authDomain: 'yourauthdomain',
            databaseURL: 'yourkey',
            projectId: 'yourkey',
            storageBucket: 'yourkey',
            messagingSenderId: 'yourkey'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }
```
paste the code that we copied from firebase before to firebase.initializeApp.

firebase.auth().onAUthStateChanged is a method from firebase that check we are logged in yet or not, we don't need to make our validation anymore. Thanks firebase.

for logout, I make it in a Button called "Log out"
```
<Button
  onPress={() => firebase.auth().signOut()}>
  Log out
</Button>
```
again and again firebase make it all easy, we only need 1 row of code to make sure we logged out.

## It's all yours
Walla, now you can make a condition everything you like, in my case if state loggedIn = true the page will show the logout button, when loggedIn = false the page will show login form.
I know it's not a hard things to explain, but I hope this can help you guys for who first time to try !
