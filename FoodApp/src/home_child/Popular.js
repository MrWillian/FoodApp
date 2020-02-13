import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Popular extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Popular</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
});
