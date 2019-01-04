{ /*  */ }

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = {
    email: '',
    password:'',
    error:'',
    loading:false
  };

  onButtonPress() {
    // destructure the use input
    const {email, password} = this.state;

    /* when user press button.clear the error and put loading spinner true. So it will show the spinner and remove the existing error */
    this.setState({
      error:'',
      loading:true
    });


    //pass to firebase provided method. It returns promise.
    //a promise in a js is a construsct to handle asynchronous request.
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
      //if the request failed
      //attempt to create an account . Look at the diagram flow.
        //the below method also returns a JS promise. We can use it for asynchronous request.
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
              //if the request success .then
              this.onLoginSuccess.bind(this)
            )
            .catch(
                //if the request failed. Catch is failed
                this.onLoginFail.bind(this)
            );

      });
  }


  // on login failed
  onLoginFail() {
    this.setState({
      error:'Authentication Failed',
      loading: false
    });
  }

  // on  login success clear the inputs
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error:''
    });
  }

   /* if the state of loading is true show spinner */
   /* Other wise show the button . it can be if else also. But not needed */
  renderButton() {
    if(this.state.loading) {
      return <Spinner size = 'small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {

    const { errorTextStyle } = styles;

    return (
    <View style={styles.containerViewStyle}>
        <Card>
          <CardSection>
          {/* We refactored code by importing Input Component and remove TextInput we had initially*/}
          {/* when user enter the text the it gets the value and sets the value of the text in state above Also we are passing value and onChangeText passing as props to Input.js*/}
            <Input
              placeholder = 'user@gmail.com'
              label = 'Email'
              value = {this.state.email}
              onChangeText = {email => this.setState({ email })}
            />
          {/* we are passing props email  */}
          </CardSection>

          <CardSection>
          {/* we are passing secureTextEntry which is by default true */}
            <Input
              secureTextEntry
              placeholder = 'password'
              label =  'Password'
              value = {this.state.password}
              onChangeText = {password => this.setState({ password })}
            />
          </CardSection>
          {/* we are directly using styles. No need of destructuring for one object */}
          <Text style={errorTextStyle}>
            {/* By default the error is empty. If error message present then it will get it from state and display the error */}
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  containerViewStyle: {
    backgroundColor: '#323875',
    paddingTop: 100,

  }

};


export default LoginForm;
