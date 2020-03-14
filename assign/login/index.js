import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux'
import logdetails from "./log.json"
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

    };
  }

  submit = () => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      this.state.email,
    );
    if (this.state.email === null || this.state.email === '' || !isEmailValid) {
      if (
        this.state.password === null ||
        (this.state.password === '' && this.state.email === null) ||
        this.state.email === ''
      ) {
        Alert.alert('fill the required fealds');
      } else if (this.state.email === null || this.state.email === '') {
        Alert.alert('Please enter email');
      } else {
        Alert.alert('Please enter valid email');
      }
    } else if (this.state.password === null || this.state.password === '') {
      Alert.alert('Please enter password');
    } else if (this.state.password.length < 6) {
      Alert.alert(' password must in 6 letters');
    } else if (this.state.email === logdetails.username && this.state.password === logdetails.password) {
      Actions.dashBoardList()
    } else {
      Alert.alert(' invalid details');
    }
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.midView}>
          <TextInput
            style={styles.education}
            placeholder="user name "
            placeholderTextColor={'white'}
            onChangeText={v => {
              this.setState({ email: v });
            }}
          />

          <TextInput
            style={styles.education}
            placeholder="pasword "
            secureTextEntry={true}
            textShadowColor="white"
            placeholderTextColor={'white'}
            onChangeText={p => {
              this.setState({ password: p });
            }}
          />
          <View>
            <TouchableOpacity
              style={styles.loginTuch}
              onPress={() => {
                this.submit()
              }}>
              <Text style={styles.mainTuch}>Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
