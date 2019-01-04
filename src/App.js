import React, { Component } from 'react'
import { View } from 'react-native';
import firebase from 'firebase';
//the below statement will import the Header file from common folrder
import { Header,Card, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  //by default user is not logged in
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxsNxitlX9gFSLreAArid3h07X_1M8Wy4',
      authDomain: 'auth-1468d.firebaseapp.com',
      databaseURL: 'https://auth-1468d.firebaseio.com',
      projectId: 'auth-1468d',
      storageBucket: 'auth-1468d.appspot.com',
      messagingSenderId: '990670097355'
    });

    //event handler for either signing in or signing out with user object argument
    //the below code understands if the user logged in or/else logged out
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        //if user is logged in
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>

        );
      case false:
        //if user is not logged in
        return <LoginForm style={styles.containerStyle} />;
        //if you dont know any. Then firebase take some time to figure out the state. S
        //because of that we are using the default spinner case
      default:
        return (
          <View style= {styles.spinnerStyleCenter}>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {

    return (
      <View style={styles.containerStyle}>
      { /* passing the props headerText and use in Header Component */ }
      <Header headerText='Authentication' />
        { /* The below method handle logic for the show/hide login form based on user state */ }
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyleCenter : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: '#323875',
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: 100,
    flexDirection: 'column',
  }
}
export default App;
