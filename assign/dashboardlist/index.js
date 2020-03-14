import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import styles from './styles'
import data from "../data.json"
export default class DashBoardList extends Component {
  render() {
    const showlist = data.user.map((v) => {
      return (
        <View style={styles.main}>
          <View style={styles.inside} ><Text style={styles.insideText}>{v.id}</Text></View>
          <View style={styles.flex}>
            <View style={styles.detailed}>
              <Text>{v.name}</Text>
              <Text>{v.age}</Text>
            </View>
            <Text style={styles.margin}>{v.gender}</Text>
            <View style={styles.detailed}>
              <Text>{v.email}</Text>
              <Text>{v.phoneNo}</Text>
            </View>
          </View>
        </View>
      )
    })
    return (
      <View>
        <ScrollView>
          {showlist}
        </ScrollView>
      </View>
    );
  }
}
